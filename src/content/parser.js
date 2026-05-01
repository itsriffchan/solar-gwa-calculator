function isBlank(value){
    return value == null || String(value).trim() === '';
}

function toNumber(value) {
    if (isBlank(value)) {
        return null;
    }

    const parsedValue = Number.parseFloat(String(value).trim());
    return Number.isNaN(parsedValue) ? null : parsedValue;
}

function parsePortalRow(cells) {
    if (!Array.isArray(cells) || cells.length < 6) {
        return null;
    }

    const units = toNumber(cells[3]);
    const midtermGrade = toNumber(cells[4]);
    const finalGrade = toNumber(cells[5]);

    const grade = isBlank(cells[5]) ? midtermGrade : finalGrade;

    if (units == null || grade == null){
        return null;
    }

    return {
        units, grade
    };
}

function parsePortalTable(rows){
    if (!Array.isArray(rows)) {
           return [];
    }

    return rows.map(parsePortalRow).filter(row => row !== null);
}  

module.exports = {
        parsePortalRow,
        parsePortalTable,
        isBlank,
        toNumber,
};
