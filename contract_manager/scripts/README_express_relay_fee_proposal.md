# OP-PIP-90: Express Relay Fee Implementation (Q1 2026)

This directory contains the configuration and documentation for OP-PIP-90, implementing the Q1 2026 fee structure for Pyth Express Relay.

## Files

| File | Description |
|------|-------------|
| `express_relay_fee_config_q1_2026.json` | Complete fee matrix with all 35 tokens and their mint addresses |
| `OP-PIP-90_express_relay_forum_post.md` | Forum post draft for OP-PIP-90 |

## Fee Tiers

| Tier | Fee (bps) | Fee (ppm) | Tokens |
|------|-----------|-----------|--------|
| Stablecoins | 1 | 100 | USDC, USDT, PYUSD |
| Major Tokens | 5 | 500 | WSOL, JUP, CBBTC, WBTC, JTO |
| Other Tokens | 10 | 1000 | 16 tokens (WIF, JLP, POPCAT, etc.) |
| X Stocks | 10 | 1000 | 10 tokens (was 5 bps) |

## Summary

- **Total tokens:** 35
- **Tokens with fee changes:** 35 (all)
- **New fees for 25 tokens:** Previously 0 bps → now 1-10 bps
- **Fee increase for 10 X Stocks:** 5 bps → 10 bps

## Implementation

The fee configuration is applied via the Express Relay auction server's `minimum_platform_fee_list` setting.

**Repository:** [pyth-network/per](https://github.com/pyth-network/per)

**PR:** https://github.com/pyth-network/express-relay-infra/pull/44

## References

- [Q1 2026 Express Relay Fee Discussion](https://forum.pyth.network/t/q1-2026-pyth-express-relay-onchain-fee/2324)
- [OP-PIP-87 (Phase 2 Reserve)](https://forum.pyth.network/t/passed-op-pip-86-pyth-token-phase-2-pyth-strategic-reserve/2293/2)
- [Pyth Token Phase 2](https://forum.pyth.network/t/pyth-token-phase-2/2284)
