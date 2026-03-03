# OP-PIP-91: Q1 2026 Entropy Protocol Fee Implementation

## Abstract

Implement protocol fees on Pyth Entropy across all 19 supported EVM chains as outlined in the [Q1 2026 — Pyth Entropy Onchain Fees](https://forum.pyth.network/t/q1-2026-pyth-entropy-onchain-fees/2317) discussion.

## Rationale

Following the mandate from [OP-PIP-87](https://forum.pyth.network/t/passed-op-pip-86-pyth-token-phase-2-pyth-strategic-reserve/2293/2) and the [Pyth Token Phase 2 discussion](https://forum.pyth.network/t/pyth-token-phase-2/2284), the Pythian Council is responsible for implementing on-chain fees for Pyth products on a quarterly basis.

Until now, Entropy protocol fees have been set to the minimum value (1 wei), meaning all fees collected were solely provider fees. This proposal activates DAO-owned protocol fees across all Entropy-supported chains.

The fee structure was designed with three principles:
1. **Per-request model**: Fees apply to each individual randomness request
2. **Proportionality**: Fees remain reasonable relative to overall blockchain transaction costs
3. **Balance**: Protocol fees are set to complement (not overshadow) existing provider fees

## Description

This proposal calls `setPythFee(uint128 newPythFee)` on the Entropy contract for each of the 19 supported EVM chains via the Wormhole executor.

### Fee Schedule

| Chain | New Protocol Fee | Token | Approx. USD |
|-------|-----------------|-------|-------------|
| Abstract | 0.000003 | ETH | ~$0.01 |
| Apechain | 0.02 | APE | ~$0.01 |
| Arbitrum | 0.000003 | ETH | ~$0.01 |
| B3 | 0.000003 | ETH | ~$0.01 |
| Base | 0.000003 | ETH | ~$0.01 |
| Berachain | 0.01 | BERA | ~$0.01 |
| Blast | 0.000003 | ETH | ~$0.01 |
| Etherlink | 0.025 | XTZ | ~$0.01 |
| HyperEVM | 0.0004 | HYPE | ~$0.01 |
| Kaia | 0.2 | KAIA | ~$0.01 |
| Monad | 0.2 | MON | ~$0.01 |
| Optimism | 0.000003 | ETH | ~$0.01 |
| Sanko | 0.002 | DMT | ~$0.01 |
| Sei EVM | 0.1 | SEI | ~$0.01 |
| Soneium | 0.000003 | ETH | ~$0.01 |
| Sonic | 0.1 | S | ~$0.01 |
| Story | 0.01 | IP | ~$0.01 |
| Unichain | 0.000003 | ETH | ~$0.01 |
| Zetachain | 0.2 | ZETA | ~$0.01 |

### Implementation

[Proposal](https://proposals.pyth.network/?tab=proposals&proposal=LINK): `PROPOSAL_ID`

The proposal executes a governance action that calls `setPythFee(uint128 newPythFee)` on each chain's Entropy contract via the Wormhole executor.

## Verification

To verify this proposal:

1. Clone the pyth-crosschain repository and install dependencies:
   ```bash
   git clone https://github.com/pyth-network/pyth-crosschain.git
   cd pyth-crosschain
   npm ci && npx lerna run build
   ```

2. Review the fee configuration file at `contract_manager/scripts/entropy_fee_config_q1_2026.json` — this contains all chain IDs, Entropy contract addresses, and fee amounts in wei.

3. Verify the proposal payload by running:
   ```bash
   cd contract_manager
   npx ts-node scripts/check_proposal.ts --cluster mainnet-beta --proposal <proposal_id>
   ```

4. Cross-reference the fee amounts with the [Q1 2026 — Pyth Entropy Onchain Fees](https://forum.pyth.network/t/q1-2026-pyth-entropy-onchain-fees/2317) discussion to confirm they match the approved values.

5. Verify the Entropy contract addresses against the [official Entropy chainlist](https://docs.pyth.network/entropy/chainlist).

---

*This proposal implements the fee structure discussed in [Q1 2026 — Pyth Entropy Onchain Fees](https://forum.pyth.network/t/q1-2026-pyth-entropy-onchain-fees/2317).*
