# OP-PIP-XX: Q1 2026 Pyth Core Fee Implementation (EVM Chains)

## Abstract

Implement price feed update fees on Pyth Core across 68 EVM chains as outlined in the [Q1 2026 — Pyth Core Onchain Fees](https://forum.pyth.network/t/q1-2026-pyth-core-onchain-fees/2319) discussion.

## Rationale

Following the mandate from [OP-PIP-87](https://forum.pyth.network/t/passed-op-pip-86-pyth-token-phase-2-pyth-strategic-reserve/2293/2) and the [Pyth Token Phase 2 discussion](https://forum.pyth.network/t/pyth-token-phase-2/2284), the Pythian Council is responsible for implementing on-chain fees for Pyth products on a quarterly basis.

Until now, most EVM chains have had Pyth Core fees set to the minimum value (1 wei). This proposal implements DAO-owned protocol fees across all EVM chains where Pyth Core is deployed.

The fee structure was designed with three principles:
1. **Per-feed model**: Fees apply to each individual price feed update
2. **Per-update charges**: Each feed update incurs a fee
3. **Proportionality**: Fees remain reasonable relative to overall transaction costs

**Note:** Non-EVM chains (Solana, Sui, Aptos, TON, NEAR, Starknet, etc.) will be addressed in a subsequent proposal once the required technical work is completed.

## Description

This proposal updates the price feed update fee on 68 EVM chains by calling the governance set fee function via the Wormhole executor.

### Fee Schedule

| Blockchain | New Fee | Token | Note |
|------------|---------|-------|------|
| 0G | 0.2 | 0G | Fees increased |
| Abstract | 0.000003 | ETH | Fees increased |
| Apechain | 0.2 | APE | Fees increased |
| Arbitrum | 0.000003 | ETH | Fees increased |
| Aurora | 0.000003 | ETH | Fees unchanged |
| Avalanche | 0.0005 | AVAX | Fees increased |
| Berachain | 0.003 | BERA | Fees increased |
| Bittensor | 0.00005 | TAO | Fees increased |
| Blast | 0.000003 | ETH | Fees increased |
| BNB | 0.0000125 | BNB | Fees increased |
| BTTC | 25,000 | BTT | Fees increased |
| Base | 0.0000015 | ETH | Fees increased |
| Boba | 0.000003 | ETH | Fees increased |
| Camp | 2 | CAMP | Fees increased |
| Celo | 0.1 | CELO | Fees increased |
| Chilliz | 0.33 | CHZ | Fees increased |
| Conflux | 0.1 | CFX | Fees unchanged |
| Core DAO | 0.02 | CORE | Fees increased |
| Cronos | 0.06 | CRO | Fees unchanged |
| Cronos zkEVM | 0.06 | CRO | Fees increased |
| Ethereum | 0.000003 | ETH | Fees increased |
| Etherlink | 0.01 | XTZ | Fees increased |
| Eventum | 0.000003 | ETH | Fees increased |
| Filecoin | 0.01 | FIL | Fees increased |
| Flow | 0.1 | FLOW | Fees increased |
| Gnosis | 0.01 | XDAI | Fees increased |
| Gravity | 1 | G | Fees increased |
| Hemi | 0.000003 | ETH | Fees increased |
| HyperEVM | 0.0001 | HYPE | Fees increased |
| Injective EVM | 0.001 | INJ | Fees increased |
| Ink | 0.000003 | ETH | Fees increased |
| Iota (EVM) | 0.1 | IOTA | Fees increased |
| Kava | 0.15 | KAVA | Fees increased |
| KCC | 0.001 | KCS | Fees increased |
| Kaia | 0.2 | KAIA | Fees increased |
| Lightlink | 1 | LL | Fees increased |
| Linea | 0.000003 | ETH | Fees increased |
| Manta | 0.000003 | ETH | Fees increased |
| Mantle | 0.01 | MNT | Fees increased |
| Merlin | 0.0000001 | BTC | Fees increased |
| Meter | 0.04 | MTR | Fees increased |
| Mezo | 0.0000001 | BTC | Fees increased |
| Mode | 0.000003 | ETH | Fees increased |
| Monad | 0.005 | MON | Fees increased |
| Morph | 0.000003 | ETH | Fees increased |
| Neon | 0.15 | NEON | Fees increased |
| opBNB | 0.0000125 | BNB | Fees decreased |
| Optimism | 0.000003 | ETH | Fees increased |
| Plasma | 0.05 | XPL | Fees increased |
| Polygon | 0.1 | POL | Fees increased |
| Polygon zkEVM | 0.000003 | ETH | Fees increased |
| Polynomial | 0.0000015 | ETH | Fees increased |
| Ronin | 0.1 | RON | Fees increased |
| Scroll | 0.000003 | ETH | Fees increased |
| Superseed | 0.000003 | ETH | Fees increased |
| Sei EVM | 0.1 | SEI | Fees increased |
| Shimmer | 100 | SMR | Fees increased |
| Skate | 0.000003 | ETH | Fees increased |
| Soneium | 0.000003 | ETH | Fees increased |
| Story Protocol | 0.006 | IP | Fees increased |
| Swellchain | 0.000003 | ETH | Fees decreased |
| Taiko | 0.000003 | ETH | Fees increased |
| Unichain | 0.000003 | ETH | Fees increased |
| Viction | 0.1 | VIC | Fees increased |
| WEMIX | 0.03 | WEMIX | Fees increased |
| Worldchain | 0.000003 | ETH | Fees decreased |
| zkSync Era | 0.000003 | ETH | Fees increased |
| Zetachain | 0.1 | ZETA | Fees increased |

### Implementation

[Proposal](https://proposals.pyth.network/?tab=proposals&proposal=LINK): `PROPOSAL_ID`

The proposal executes a governance action that sets the fee value and exponent for each chain's Pyth contract via the Wormhole executor.

## Verification

To verify this proposal:

1. Clone the pyth-crosschain repository and install dependencies:
   ```bash
   git clone https://github.com/pyth-network/pyth-crosschain.git
   cd pyth-crosschain
   npm ci && npx lerna run build
   ```

2. Review the fee configuration file at `contract_manager/scripts/core_fee_config_q1_2026.json` — this contains all chain IDs, fee values, and exponents.

3. Verify the proposal payload by running:
   ```bash
   cd contract_manager
   npx ts-node scripts/check_proposal.ts --cluster mainnet-beta --proposal <proposal_id>
   ```

4. Cross-reference the fee values with the [Q1 2026 — Pyth Core Onchain Fees](https://forum.pyth.network/t/q1-2026-pyth-core-onchain-fees/2319) discussion to confirm they match the approved values.

5. For each chain, verify the fee calculation:
   - The new fee value must match the `fee` field in the config
   - The new fee exponent must match the `exponent` field in the config
   - The actual fee = `fee × 10^(exponent - 18)` for 18-decimal tokens

   For example, for chains with ETH (18 decimals):
   - 0.000003 ETH = fee value 3, exponent 12 (because 3 × 10^(12-18) = 3 × 10^(-6) = 0.000003)

---

*This proposal implements the EVM fee structure discussed in [Q1 2026 — Pyth Core Onchain Fees](https://forum.pyth.network/t/q1-2026-pyth-core-onchain-fees/2319).*
