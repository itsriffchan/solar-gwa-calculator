# Solar GWA Calculator

Browser extension project for calculating GWA from the SOLAR Grades portal

## Download And Install

The recommended distribution is a GitHub Release asset, not a browser store listing.

### Chrome / Edge

1. Download the release ZIP from the GitHub Releases page.
2. Extract the ZIP to a folder on your computer.
3. Open `chrome://extensions` or `edge://extensions`.
4. Enable Developer mode.
5. Choose Load unpacked and select the extracted extension folder.

### Firefox

Firefox support may require a separate signed build depending on how you distribute the extension. For local testing, use about:debugging and load the extracted folder as a temporary add-on if the manifest is compatible.

### Updating

When a new release is published, remove the old unpacked folder or overwrite it with the new release contents, then reload the extension in the browser.

## Release Notes

See [RELEASE_NOTES_TEMPLATE.md](RELEASE_NOTES_TEMPLATE.md) for a copy-paste template for GitHub Releases.

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
