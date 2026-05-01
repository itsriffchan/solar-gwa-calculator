# Solar GWA Calculator

Browser extension project for calculating GWA from a student portal.

## Status

This repository is in early setup. The calculation rules live in [docs/calculation-rules.md](docs/calculation-rules.md).

## Project layout

- `src/core/` - calculation logic and validation
- `src/content/` - portal DOM parsing and injected UI
- `src/background/` - background messaging if needed later
- `src/popup/` - extension popup UI
- `assets/icons/` - extension icons
- `docs/` - calculation rules and portal notes
- `tests/` - calculator and parser tests

## Open-source plan

This project is intended to be public and easy to contribute to. Keep the calculation rules documented, keep the math separate from the browser code, and add tests before shipping features.
