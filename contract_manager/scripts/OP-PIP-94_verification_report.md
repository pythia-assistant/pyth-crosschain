# OP-PIP-94 Verification Report

**Proposal:** Q1 2026 Entropy Protocol Fee Implementation  
**Proposal ID:** `2Cypujn5GqkcfQJ2W52RP9PKqd8d7mZCqwVBk5Ri91UF`  
**Forum Post:** https://forum.pyth.network/t/ongoing-op-pip-94-q1-2026-entropy-protocol-fee-implementation/2347  
**On-chain Proposal:** https://proposals.pyth.network/?tab=proposals&proposal=2Cypujn5GqkcfQJ2W52RP9PKqd8d7mZCqwVBk5Ri91UF

**Verified by:** Pythia (automated)  
**Date:** 2026-02-11

---

## 1. Fee Schedule Verification ✅

Cross-referenced proposed fees against the original [Q1 2026 — Pyth Entropy Onchain Fees](https://forum.pyth.network/t/q1-2026-pyth-entropy-onchain-fees/2317) discussion.

| Chain | Proposed Fee | Original Discussion | Match |
|-------|-------------|---------------------|-------|
| Abstract | 0.000003 ETH | 0.000003 ETH | ✅ |
| Apechain | 0.02 APE | 0.02 APE | ✅ |
| Arbitrum | 0.000003 ETH | 0.000003 ETH | ✅ |
| B3 | 0.000003 ETH | 0.000003 ETH | ✅ |
| Base | 0.000003 ETH | 0.000003 ETH | ✅ |
| Berachain | 0.01 BERA | 0.01 BERA | ✅ |
| Blast | 0.000003 ETH | 0.000003 ETH | ✅ |
| Etherlink | 0.025 XTZ | 0.025 XTZ | ✅ |
| HyperEVM | 0.0004 HYPE | 0.0004 HYPE | ✅ |
| Kaia | 0.2 KAIA | 0.2 KAIA | ✅ |
| Monad | 0.2 MON | 0.2 MON | ✅ |
| Optimism | 0.000003 ETH | 0.000003 ETH | ✅ |
| Sanko | 0.002 DMT | 0.002 DMT | ✅ |
| Sei EVM | 0.1 SEI | 0.1 SEI | ✅ |
| Soneium | 0.000003 ETH | 0.000003 ETH | ✅ |
| Sonic | 0.1 S | 0.1 S | ✅ |
| Story | 0.01 IP | 0.01 IP | ✅ |
| Unichain | 0.000003 ETH | 0.000003 ETH | ✅ |
| Zetachain | 0.2 ZETA | 0.2 ZETA | ✅ |

**Result: All 19 chains match the approved fee structure.**

---

## 2. Contract Address Verification ✅

Cross-referenced contract addresses in `entropy_fee_config_q1_2026.json` against [official Pyth Entropy chainlist](https://docs.pyth.network/entropy/chainlist).

| Chain | Config Address | Chainlist Address | Match |
|-------|---------------|-------------------|-------|
| Abstract | 0x5a4a369F4db5df2054994AF031b7b23949b98c0e | 0x5a4a...b98c0e | ✅ |
| Apechain | 0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320 | 0x3682...39e320 | ✅ |
| Arbitrum | 0x7698E925FfC29655576D0b361D75Af579e20AdAc | 0x7698...20adac | ✅ |
| B3 | 0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb | 0x5744...8ef0fb | ✅ |
| Base | 0x6E7D74FA7d5c90FEF9F0512987605a6d546181Bb | 0x6e7d...6181bb | ✅ |
| Berachain | 0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320 | 0x3682...39e320 | ✅ |
| Blast | 0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb | 0x5744...8ef0fb | ✅ |
| Etherlink | 0x23f0e8FAeE7bbb405E7A7C3d60138FCfd43d7509 | 0x23f0...3d7509 | ✅ |
| HyperEVM | 0xfA25E653b44586dBbe27eE9d252192F0e4956683 | 0xfa25...956683 | ✅ |
| Kaia | 0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320 | 0x3682...39e320 | ✅ |
| Monad | 0xD458261E832415CFd3BAE5E416FdF3230ce6F134 | 0xd458...e6f134 | ✅ |
| Optimism | 0xdF21D137Aadc95588205586636710ca2890538d5 | 0xdf21...0538d5 | ✅ |
| Sanko | 0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb | 0x5744...8ef0fb | ✅ |
| Sei EVM | 0x98046Bd286715D3B0BC227Dd7a956b83D8978603 | 0x9804...978603 | ✅ |
| Soneium | 0x0708325268dF9F66270F1401206434524814508b | 0x0708...14508b | ✅ |
| Sonic | 0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320 | 0x3682...39e320 | ✅ |
| Story | 0xdF21D137Aadc95588205586636710ca2890538d5 | 0xdf21...0538d5 | ✅ |
| Unichain | 0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320 | 0x3682...39e320 | ✅ |
| Zetachain | 0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320 | 0x3682...39e320 | ✅ |

**Result: All 19 contract addresses match the official chainlist.**

---

## 3. On-chain Contract Existence ✅

Verified sample contracts exist on-chain (have deployed bytecode):

- [Arbitrum] 0x7698E925FfC29655576D0b361D75Af579e20AdAc — ✅ Contract exists
- [Base] 0x6E7D74FA7d5c90FEF9F0512987605a6d546181Bb — ✅ Contract exists
- [Optimism] 0xdF21D137Aadc95588205586636710ca2890538d5 — ✅ Contract exists
- [Berachain] 0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320 — ✅ Contract exists

---

## 4. Wei Amount Verification ✅

Verified fee amounts in wei match human-readable values:

| Chain | Human Readable | Wei (config) | Calculated Wei | Match |
|-------|---------------|--------------|----------------|-------|
| ETH chains | 0.000003 ETH | 3000000000000 | 3 × 10¹² | ✅ |
| Apechain | 0.02 APE | 20000000000000000 | 2 × 10¹⁶ | ✅ |
| Berachain | 0.01 BERA | 10000000000000000 | 10¹⁶ | ✅ |
| Etherlink | 0.025 XTZ | 25000000000000000 | 2.5 × 10¹⁶ | ✅ |
| HyperEVM | 0.0004 HYPE | 400000000000000 | 4 × 10¹⁴ | ✅ |
| Kaia | 0.2 KAIA | 200000000000000000 | 2 × 10¹⁷ | ✅ |
| Monad | 0.2 MON | 200000000000000000 | 2 × 10¹⁷ | ✅ |
| Sanko | 0.002 DMT | 2000000000000000 | 2 × 10¹⁵ | ✅ |
| Sei EVM | 0.1 SEI | 100000000000000000 | 10¹⁷ | ✅ |
| Sonic | 0.1 S | 100000000000000000 | 10¹⁷ | ✅ |
| Story | 0.01 IP | 10000000000000000 | 10¹⁶ | ✅ |
| Zetachain | 0.2 ZETA | 200000000000000000 | 2 × 10¹⁷ | ✅ |

---

## Summary

| Check | Status |
|-------|--------|
| Fee amounts match original discussion | ✅ PASS |
| Contract addresses match official chainlist | ✅ PASS |
| Contracts exist on-chain (sample) | ✅ PASS |
| Wei conversions are correct | ✅ PASS |

**Overall: VERIFIED ✅**

The proposal correctly implements the fee structure approved in [Q1 2026 — Pyth Entropy Onchain Fees](https://forum.pyth.network/t/q1-2026-pyth-entropy-onchain-fees/2317) across all 19 Entropy-supported EVM chains.

---

*Generated automatically by Pythia on 2026-02-11*
