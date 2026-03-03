/* eslint-disable no-console */
/**
 * Script to generate a governance proposal for setting Pyth Core protocol fees across EVM chains.
 * 
 * Usage:
 *   npx ts-node scripts/generate_core_set_fee_proposal.ts \
 *     --config-path ./scripts/core_fee_config_q1_2026.json \
 *     --dry-run
 *
 *   npx ts-node scripts/generate_core_set_fee_proposal.ts \
 *     --config-path ./scripts/core_fee_config_q1_2026.json \
 *     --ops-key-path /path/to/ops_key.json
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { loadHotWallet } from "../src/node/utils/governance";
import { DefaultStore } from "../src/node/utils/store";

// Fee configuration type
interface FeeConfig {
  chainId: string;        // Chain ID in the store (e.g., "abstract", "arbitrum")
  chainName: string;      // Human-readable name
  newFee: string;         // Human-readable fee (e.g., "0.000003")
  token: string;          // Token symbol
  fee: number;            // Fee value for governance payload
  exponent: number;       // Fee exponent for governance payload
  note: string;           // Note about the change
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

  console.log(`\n📋 Processing ${config.length} chains for Pyth Core fee updates...\n`);

  const updatePayloads: Buffer[] = [];
  const errors: string[] = [];
  let successCount = 0;

  for (const entry of config) {
    try {
      const chain = DefaultStore.getChainOrThrow(entry.chainId);
      
      console.log(`Chain: ${entry.chainName} (${entry.chainId})`);
      console.log(`  New Fee: ${entry.newFee} ${entry.token}`);
      console.log(`  Fee Value: ${entry.fee}, Exponent: ${entry.exponent}`);
      console.log(`  Note: ${entry.note}`);
      
      const payload = chain.generateGovernanceSetFeePayload(
        entry.fee,
        entry.exponent,
      );
      
      updatePayloads.push(payload);
      console.log(`  ✅ Payload generated: ${payload.toString("hex").slice(0, 40)}...`);
      console.log();
      successCount++;
    } catch (error) {
      const errorMsg = `Error processing ${entry.chainName} (${entry.chainId}): ${error}`;
      console.error(`  ❌ ${errorMsg}`);
      console.log();
      errors.push(errorMsg);
    }
  }

  console.log(`\n📦 Summary:`);
  console.log(`   Successful: ${successCount}/${config.length}`);
  console.log(`   Failed: ${errors.length}`);
  
  if (errors.length > 0) {
    console.log(`\n⚠️  Errors:`);
    errors.forEach((e, i) => console.log(`   ${i + 1}. ${e}`));
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
