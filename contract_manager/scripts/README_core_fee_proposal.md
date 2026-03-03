# Pyth Core Fee Update Proposal - Q1 2026

## Overview

This script generates a governance proposal to update Pyth Core price feed fees across 68 EVM chains.

**Fee structure:**
- ETH-based chains: ~0.000003 ETH per update
- Non-ETH chains: Token-specific amounts (see table below)

## Chains Included

| Chain | New Fee | Token | Note |
|-------|---------|-------|------|
| 0G | 0.2 | 0G | Increased |
| Abstract | 0.000003 | ETH | Increased |
| Apechain | 0.2 | APE | Increased |
| Arbitrum | 0.000003 | ETH | Increased |
| Aurora | 0.000003 | ETH | Unchanged |
| Avalanche | 0.0005 | AVAX | Increased |
| Berachain | 0.003 | BERA | Increased |
| Bittensor | 0.00005 | TAO | Increased |
| Blast | 0.000003 | ETH | Increased |
| BNB | 0.0000125 | BNB | Increased |
| BTTC | 25000 | BTT | Increased |
| Base | 0.0000015 | ETH | Increased |
| Boba | 0.000003 | ETH | Increased |
| Camp | 2 | CAMP | Increased |
| Celo | 0.1 | CELO | Increased |
| Chilliz | 0.33 | CHZ | Increased |
| Conflux | 0.1 | CFX | Unchanged |
| Core DAO | 0.02 | CORE | Increased |
| Cronos | 0.06 | CRO | Unchanged |
| Cronos zkEVM | 0.06 | CRO | Increased |
| Ethereum | 0.000003 | ETH | Increased |
| Etherlink | 0.01 | XTZ | Increased |
| Eventum | 0.000003 | ETH | Increased |
| Filecoin | 0.01 | FIL | Increased |
| Flow | 0.1 | FLOW | Increased |
| Gnosis | 0.01 | XDAI | Increased |
| Gravity | 1 | G | Increased |
| Hemi | 0.000003 | ETH | Increased |
| HyperEVM | 0.0001 | HYPE | Increased |
| Injective EVM | 0.001 | INJ | Increased |
| Ink | 0.000003 | ETH | Increased |
| Iota (EVM) | 0.1 | IOTA | Increased |
| Kava | 0.15 | KAVA | Increased |
| KCC | 0.001 | KCS | Increased |
| Kaia | 0.2 | KAIA | Increased |
| Lightlink | 1 | LL | Increased |
| Linea | 0.000003 | ETH | Increased |
| Manta | 0.000003 | ETH | Increased |
| Mantle | 0.01 | MNT | Increased |
| Merlin | 0.0000001 | BTC | Increased |
| Meter | 0.04 | MTR | Increased |
| Mezo | 0.0000001 | BTC | Increased |
| Mode | 0.000003 | ETH | Increased |
| Monad | 0.005 | MON | Increased |
| Morph | 0.000003 | ETH | Increased |
| Neon | 0.15 | NEON | Increased |
| opBNB | 0.0000125 | BNB | Decreased |
| Optimism | 0.000003 | ETH | Increased |
| Plasma | 0.05 | XPL | Increased |
| Polygon | 0.1 | POL | Increased |
| Polygon zkEVM | 0.000003 | ETH | Increased |
| Polynomial | 0.0000015 | ETH | Increased |
| Ronin | 0.1 | RON | Increased |
| Scroll | 0.000003 | ETH | Increased |
| Superseed | 0.000003 | ETH | Increased |
| Sei EVM | 0.1 | SEI | Increased |
| Shimmer | 100 | SMR | Increased |
| Skate | 0.000003 | ETH | Increased |
| Soneium | 0.000003 | ETH | Increased |
| Story Protocol | 0.006 | IP | Increased |
| Swellchain | 0.000003 | ETH | Decreased |
| Taiko | 0.000003 | ETH | Increased |
| Unichain | 0.000003 | ETH | Increased |
| Viction | 0.1 | VIC | Increased |
| WEMIX | 0.03 | WEMIX | Increased |
| Worldchain | 0.000003 | ETH | Decreased |
| zkSync Era | 0.000003 | ETH | Increased |
| Zetachain | 0.1 | ZETA | Increased |

## Files

- `generate_core_set_fee_proposal.ts` - The proposal generation script
- `core_fee_config_q1_2026.json` - Chain configs with fee amounts
- `OP-PIP-XX_core_forum_post.md` - Forum post draft for the proposal

## Prerequisites

```bash
# From pyth-crosschain repo root
cd contract_manager
pnpm install
```

## Usage

### 1. Dry Run (recommended first)

```bash
npx tsx scripts/generate_core_set_fee_proposal.ts \
  --config-path ./scripts/core_fee_config_q1_2026.json \
  --dry-run
```

This validates all chains and shows what would be submitted without actually creating a proposal.

### 2. Submit Proposal

```bash
npx tsx scripts/generate_core_set_fee_proposal.ts \
  --config-path ./scripts/core_fee_config_q1_2026.json \
  --ops-key-path /path/to/ops_key.json
```

**Note:** The private key should be for the Pythian Council operations wallet that has permission to submit governance proposals.

### 3. Post on Forum

Once the transaction lands on-chain and the proposal is created:
1. Copy the proposal URL from the script output (e.g., `https://proposals.pyth.network/?tab=proposals&proposal=<id>`)
2. Update the `OP-PIP-XX_core_forum_post.md` with the proposal link and correct PIP number
3. Post the proposal on the [Pyth Forum](https://forum.pyth.network) in the Proposals category

## After Submission

1. Proposal appears at [proposals.pyth.network](https://proposals.pyth.network)
2. Requires 7-of-9 Pythian Council member signatures to pass
3. Once approved, fees update on-chain automatically

## Context

This fee update is part of the Q1 2026 Pyth Core fee adjustment per Pyth governance, implementing fees across EVM chains as outlined in the [Q1 2026 — Pyth Core Onchain Fees](https://forum.pyth.network/t/q1-2026-pyth-core-onchain-fees/2319) discussion.

---

*Generated 2026-01-29*
