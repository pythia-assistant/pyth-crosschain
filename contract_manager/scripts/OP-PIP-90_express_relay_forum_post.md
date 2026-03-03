# OP-PIP-90: Q1 2026 Pyth Express Relay Fee Implementation

## Abstract

Implement the Q1 2026 fee structure for Pyth Express Relay across all 35 whitelisted tokens. This proposal updates the auction server's `minimum_platform_fee_list` configuration to apply protocol fees based on a three-tier pricing matrix: stablecoins at 1 bps, major tokens at 5 bps, and all other tokens at 10 bps.

## Rationale

On December 9th, 2025, the Pyth DAO, via [OP-PIP-87](https://forum.pyth.network/t/passed-op-pip-86-pyth-token-phase-2-pyth-strategic-reserve/2293/2) and the [Pyth Token Phase 2 discussion](https://forum.pyth.network/t/pyth-token-phase-2/2284), mandated the Pythian Council to:
1. Design a pricing matrix
2. Apply pricing changes on-chain via OP-PIPs on a quarterly basis for all Pyth Products

The fee structure was discussed and refined in the [Q1 2026 Express Relay Fee Discussion](https://forum.pyth.network/t/q1-2026-pyth-express-relay-onchain-fee/2324) in the Ideas Bank.

### Current State
- 35 tokens whitelisted on Express Relay
- Only 10 tokens (X Stocks) have non-zero protocol fees (5 bps)
- ~$100,000 revenue collected to date, primarily from SOL tips on Kamino Limit Orders

### Proposed Changes
- Apply fees to all 35 tokens based on liquidity profile
- Increase X Stocks fees from 5 bps to 10 bps
- Implement sustainable revenue model while maintaining competitive pricing

## Description

This proposal updates the Express Relay auction server configuration to implement the following fee tiers:

| Tier | Fee | Tokens |
|------|-----|--------|
| Stablecoins | 1 bps (100 ppm) | USDC, USDT, PYUSD |
| Major Tokens | 5 bps (500 ppm) | WSOL, JUP, CBBTC, WBTC, JTO |
| Other Tokens | 10 bps (1000 ppm) | All remaining tokens |

### Complete Fee Matrix

#### Stablecoins (1 bps)

| Token | Mint | Current | New |
|-------|------|---------|-----|
| USDC | `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v` | 0 bps | 1 bps |
| USDT | `Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB` | 0 bps | 1 bps |
| PYUSD | `2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo` | 0 bps | 1 bps |

#### Major Tokens (5 bps)

| Token | Mint | Current | New |
|-------|------|---------|-----|
| WSOL | `So11111111111111111111111111111111111111112` | 0 bps | 5 bps |
| JUP | `JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN` | 0 bps | 5 bps |
| CBBTC | `cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij` | 0 bps | 5 bps |
| WBTC (Wormhole) | `3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh` | 0 bps | 5 bps |
| JTO | `jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL` | 0 bps | 5 bps |

#### Other Tokens (10 bps)

| Token | Mint | Current | New |
|-------|------|---------|-----|
| WIF | `EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm` | 0 bps | 10 bps |
| JLP | `27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4` | 0 bps | 10 bps |
| POPCAT | `7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr` | 0 bps | 10 bps |
| TRUMP | `6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN` | 0 bps | 10 bps |
| AI16Z | `HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC` | 0 bps | 10 bps |
| JITOSOL | `J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn` | 0 bps | 10 bps |
| KMNO | `KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS` | 0 bps | 10 bps |
| FARTCOIN | `9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump` | 0 bps | 10 bps |
| RAY | `4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R` | 0 bps | 10 bps |
| PYTH | `HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3` | 0 bps | 10 bps |
| BONK | `DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263` | 0 bps | 10 bps |
| LAUNCHCOIN | `Ey59PH7Z4BFU4HjyKnyMdWt5GGN76KazTAwQihoUXRnk` | 0 bps | 10 bps |
| PENGU | `2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv` | 0 bps | 10 bps |
| PUMP | `pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn` | 0 bps | 10 bps |
| SPX6900 | `J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr` | 0 bps | 10 bps |
| TUNA | `TUNAfXDZEdQizTMTh3uEvNvYqJmqFHZbEJt8joP4cyx` | 0 bps | 10 bps |

#### X Stocks (10 bps)

| Token | Mint | Current | New |
|-------|------|---------|-----|
| QQQX | `Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ` | 5 bps | 10 bps |
| APPLX | `XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp` | 5 bps | 10 bps |
| NVDAX | `Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh` | 5 bps | 10 bps |
| TSLAX | `XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB` | 5 bps | 10 bps |
| GOOGLX | `XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN` | 5 bps | 10 bps |
| METAX | `Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu` | 5 bps | 10 bps |
| MSTRX | `XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ` | 5 bps | 10 bps |
| SPYX | `XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W` | 5 bps | 10 bps |
| COINX | `Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu` | 5 bps | 10 bps |
| CRCLX | `XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1` | 5 bps | 10 bps |

## Implementation Plan

1. **Configuration repository:** [pyth-network/per](https://github.com/pyth-network/per) (auction server config)

2. **Config change:** Update the `minimum_platform_fee_list` section in the Express Relay auction server configuration with the fee matrix specified above.

3. **Deployment:** Upon Pythian Council approval of the below proposal, authorized operators apply the configuration update to the production auction server.

4. **Effective date:** Fees take effect immediately upon configuration deployment.

## References

- **GitHub PR:** https://github.com/pyth-network/express-relay-infra/pull/44
- **Fee Discussion:** https://forum.pyth.network/t/q1-2026-pyth-express-relay-onchain-fee/2324
- **OP-PIP-87 (Phase 2 Reserve):** https://forum.pyth.network/t/passed-op-pip-86-pyth-token-phase-2-pyth-strategic-reserve/2293/2
- **Pyth Token Phase 2:** https://forum.pyth.network/t/pyth-token-phase-2/2284

## Proposal

[LINK TO GOVERNANCE PROPOSAL]
