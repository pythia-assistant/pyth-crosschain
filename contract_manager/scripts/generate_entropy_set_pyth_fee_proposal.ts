/* eslint-disable no-console */
/**
 * Script to generate a governance proposal for setting Pyth protocol fees on Entropy contracts.
 * 
 * Usage:
 *   npx ts-node scripts/generate_entropy_set_pyth_fee_proposal.ts \
 *     --config-path ./scripts/entropy_fee_config.json \
 *     --ops-key-path /path/to/ops_key.json \
 *     --vault mainnet-beta_FVQyHcooAtThJ83XFrNnv74BcinbRH3bRmfFamAHBfuj
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import Web3 from "web3";

import { loadHotWallet } from "../src/node/utils/governance";
import { DefaultStore } from "../src/node/utils/store";
import type { EvmChain } from "../src/core/chains";

// Minimal ABI for setPythFee function (from EntropyGovernance.sol)
const SET_PYTH_FEE_ABI = [
  {
    inputs: [{ internalType: "uint128", name: "newPythFee", type: "uint128" }],
    name: "setPythFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdmin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

// Fee configuration type
interface FeeConfig {
  chainId: string; // e.g., "abstract", "arbitrum"
  entropyContract: string; // Entropy contract address
  newFeeWei: string; // Fee in wei as string (to handle large numbers)
  token: string; // Token symbol for reference
}

const parser = yargs(hideBin(process.argv))
  .usage("Usage: $0 --config-path <path/to/config.json>")
  .options({
    "config-path": {
      type: "string",
      demandOption: true,
      desc: "Path to the fee config JSON file",
    },
    "ops-key-path": {
      type: "string",
      demandOption: false,
      desc: "Path to the ops key file (optional for dry-run)",
    },
    vault: {
      type: "string",
      default: "mainnet-beta_FVQyHcooAtThJ83XFrNnv74BcinbRH3bRmfFamAHBfuj",
      desc: "Vault ID for the Pythian Council",
    },
    "dry-run": {
      type: "boolean",
      default: false,
      desc: "Only generate payloads, don't submit proposal",
    },
  });

async function generateSetPythFeePayload(
  chain: EvmChain,
  entropyAddress: string,
  newFeeWei: string,
): Promise<Buffer> {
  const web3 = chain.getWeb3();
  const contract = new web3.eth.Contract(SET_PYTH_FEE_ABI as any, entropyAddress);
  
  // Get the admin address (should be the executor contract)
  const admin: string = await contract.methods.getAdmin().call();
  
  // Encode the setPythFee call
  const data = contract.methods.setPythFee(newFeeWei).encodeABI();
  
  // Generate executor payload
  return chain.generateExecutorPayload(admin, entropyAddress, data);
}

async function main() {
  const argv = await parser.argv;
  const {
    "config-path": configPath,
    "ops-key-path": opsKeyPath,
    vault: vaultId,
    "dry-run": dryRun,
  } = argv;

  // Load the fee configuration
  const fs = await import("fs");
  const path = await import("path");
  const absoluteConfigPath = path.resolve(process.cwd(), configPath);
  const configContent = fs.readFileSync(absoluteConfigPath, "utf-8");
  const config: FeeConfig[] = JSON.parse(configContent);

  console.log(`\n📋 Processing ${config.length} chains for Entropy fee updates...\n`);

  const updatePayloads: Buffer[] = [];

  for (const entry of config) {
    try {
      const chain = DefaultStore.getChainOrThrow(entry.chainId) as EvmChain;
      
      console.log(`Chain: ${entry.chainId}`);
      console.log(`  Entropy Contract: ${entry.entropyContract}`);
      console.log(`  New Fee: ${entry.newFeeWei} wei (${entry.token})`);
      
      const payload = await generateSetPythFeePayload(
        chain,
        entry.entropyContract,
        entry.newFeeWei,
      );
      
      updatePayloads.push(payload);
      console.log(`  ✅ Payload generated: ${payload.toString("hex").slice(0, 40)}...`);
      console.log();
    } catch (error) {
      console.error(`  ❌ Error processing ${entry.chainId}:`, error);
      throw error;
    }
  }

  console.log(`\n📦 Total payloads generated: ${updatePayloads.length}`);

  if (dryRun) {
    console.log("\n🔍 Dry run mode - not submitting proposal");
    console.log("\nGenerated payloads (hex):");
    updatePayloads.forEach((p, i) => {
      console.log(`  ${i + 1}. ${p.toString("hex")}`);
    });
    return;
  }

  if (!opsKeyPath) {
    throw new Error("--ops-key-path is required when not in dry-run mode");
  }

  // Submit the proposal
  const vault = DefaultStore.vaults[vaultId];
  if (!vault) {
    throw new Error(`Vault with ID '${vaultId}' does not exist.`);
  }

  console.log(`\n🔐 Loading ops key from ${opsKeyPath}...`);
  const keypair = await loadHotWallet(opsKeyPath);
  vault.connect(keypair);

  console.log("\n📤 Submitting proposal...");
  const proposal = await vault.proposeWormholeMessage(updatePayloads);
  
  console.log("\n✅ Proposal created successfully!");
  console.log(`   Proposal Address: ${proposal.address.toBase58()}`);
  console.log(`   View at: https://proposals.pyth.network/?tab=proposals&proposal=${proposal.address.toBase58()}`);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
