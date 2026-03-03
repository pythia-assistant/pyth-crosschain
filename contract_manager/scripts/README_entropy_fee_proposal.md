# Entropy Fee Update Proposal - Q1 2026

## Overview

This script generates a governance proposal to update Pyth protocol fees on 19 EVM Entropy chains.

**Fee structure:**
- ETH-based chains: 0.000003 ETH (~$0.01)
- Non-ETH chains: Token-specific amounts targeting ~$0.01 USD equivalent

| Chain | Token | Fee Amount |
|-------|-------|------------|
| Abstract | ETH | 0.000003 |
| Apechain | APE | 0.02 |
| Arbitrum | ETH | 0.000003 |
| B3 | ETH | 0.000003 |
| Base | ETH | 0.000003 |
| Berachain | BERA | 0.01 |
| Blast | ETH | 0.000003 |
| Etherlink | XTZ | 0.025 |
| HyperEVM | HYPE | 0.0004 |
| Kaia | KAIA | 0.2 |
| Monad | MON | 0.2 |
| Optimism | ETH | 0.000003 |
| Sanko | DMT | 0.002 |
| Sei EVM | SEI | 0.1 |
| Soneium | ETH | 0.000003 |
| Sonic | S | 0.1 |
| Story | IP | 0.01 |
| Unichain | ETH | 0.000003 |
| Zetachain | ZETA | 0.2 |

## Files

- `generate_entropy_set_pyth_fee_proposal.ts` - The proposal generation script
- `entropy_fee_config_q1_2026.json` - Chain configs with fee amounts
- `OP-PIP-91_forum_post.md` - Forum post draft for the proposal

## Prerequisites

```bash
# From pyth-crosschain repo root
cd contract_manager
pnpm install
```

## Usage

### 1. Dry Run (recommended first)

```bash
npx ts-node scripts/generate_entropy_set_pyth_fee_proposal.ts --dry-run
```

This validates all chains and shows what would be submitted without actually creating a proposal.

### 2. Submit Proposal

```bash
PRIVATE_KEY=<ops_wallet_private_key> npx ts-node scripts/generate_entropy_set_pyth_fee_proposal.ts
```

**Note:** The private key should be for the Pythian Council operations wallet that has permission to submit governance proposals.

### 3. Post on Forum

Once the transaction lands on-chain and the proposal is created:
1. Copy the proposal URL from the script output (e.g., `https://proposals.pyth.network/?tab=proposals&proposal=<id>`)
2. Update the `OP-PIP-91_forum_post.md` with the proposal link
3. Post the proposal on the [Pyth Forum](https://forum.pyth.network) in the Proposals category

## After Submission

1. Proposal appears at [proposals.pyth.network](https://proposals.pyth.network)
2. Requires 7-of-9 Pythian Council member signatures to pass
3. Once approved, fees update on-chain automatically

## Context

This fee update is part of the Q1 2026 Entropy fee adjustment per Pyth governance.

---

*Generated 2026-01-28*
