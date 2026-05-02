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
3. Open `about:debugging#/runtime/this-firefox`.
4. Click `Load Temporary Add-on`.
5. Select the `manifest.json` from the extracted folder.
> _Note: Firefox loads extensions temporarily; they are removed when the browser restarts._

## Usage
- Open the SOLAR Grades portal
- Click the extension icon
- GWA is calculated automatically from the table data

### Updating
1. Download the new release ZIP.
2. Replace or overwrite the existing folder.
3. Reload the extension:
   - Chrome/Edge → Extensions page → Reload
   - Firefox → re-load via `about:debugging`
     
## Project layout

- `src/core/` - calculation logic and validation
- `src/content/` - portal DOM parsing and injected UI
- `src/background/` - background messaging if needed later
- `src/popup/` - extension popup UI
- `assets/icons/` - extension icons
- `docs/` - calculation rules and portal notes
- `tests/` - calculator and parser tests

## License / Usage

*This project is open-source and can be modified freely.*
