# Solar GWA Calculator

Local browser extension for calculating GWA from the SOLAR Grades portal

## Download And Install
### Chrome / Edge

1. Download the release ZIP from the GitHub Releases page.
2. Extract the ZIP to a folder on your computer.
3. Open `chrome://extensions` or `edge://extensions`.
4. Enable Developer mode.
5. Choose Load unpacked and select the extracted extension folder.

### Firefox

1. Download the release ZIP from the GitHub Releases page.
2. Extract the ZIP to a folder on your computer.
3. Open `about:debugging`.
4. Navigate to `This Firefox`.
5. Click `Load Temporary Add-on`.
6. Select the `manifest.json` from the extracted folder.

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

*This project is open-source and can be modified freely*
