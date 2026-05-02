const calculateBtn = document.getElementById('calculateBtn');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');

calculateBtn.addEventListener('click', async () => { 
    clearMessages();

    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

        if (!tab || !tab.id) {
            showError('No active tab found.');
            return;
        }
        const executionResults = await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: extractPortalRowsFromPage,
        });

        const rows = executionResults?.[0]?.result || [];
        if (!Array.isArray(rows) || rows.length === 0) {
            showError('No grade rows found on page.');
            return;
        }

        const courses = parsePortalTable(rows);
        if (courses.length === 0) {
            showError('No valid courses found after parsing.');
            return;
        }

        const gwa = calculateGWA(courses);
        if (gwa === null) {
            showError('Unable to calculate GWA (units are zero).');
            return;
        }

        showResult(gwa);
    } catch (error) {
        showError(`Failed to calculate GWA: ${error.message}`);
    }
});

function extractPortalRowsFromPage(){
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));

    return tableRows.map(row => {
        const cells = Array.from(row.querySelectorAll('td'));
        return cells.map(cell => cell.textContent.trim());
    });
}

function getRankClass(gwa) {
    if (gwa >= 3.80) return 'gwa-gold';
    if (gwa >= 3.60) return 'gwa-silver';
    if (gwa >= 3.40) return 'gwa-bronze';
    return 'gwa-neutral';
}
function showResult(gwa) {
    const rankClass = getRankClass(gwa);
    resultEl.innerHTML = `
        <div class="gwa-value ${rankClass}" role="status" aria-live="polite">${gwa.toFixed(2)}</div>
        <div class="gwa-label">Calculated GWA</div>
        `;
    resultEl.classList.add('show');
}

function showError(message) { 
    errorEl.textContent = message;
    errorEl.classList.add('show');
}

function clearMessages() {
    resultEl.classList.remove('show');
    resultEl.innerHTML = '';
    errorEl.classList.remove('show');
    errorEl.textContent = '';
}