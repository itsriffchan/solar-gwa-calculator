const assert = require('assert');
const { parsePortalRow, parsePortalTable } = require('../src/content/parser');

const finalGradeRow = ['CCS0101', 'DESIGN THINKING (CCS)', 'TS21', '3', '4.0', '4.0'];
const midtermOnlyRow = ['CS0005', 'DATABASE SYSTEMS', 'TS21', '3', '3.0', ''];
const invalidRow = ['CS0006', 'ALGO', 'TS21', '', '', ''];

const parsedFinalGradeRow = parsePortalRow(finalGradeRow);
assert.deepStrictEqual(parsedFinalGradeRow, {
    units: 3,
    grade: 4,
});

const parsedMidtermOnlyRow = parsePortalRow(midtermOnlyRow);
assert.deepStrictEqual(parsedMidtermOnlyRow, {
    units: 3,
    grade: 3,
});

const parsedInvalidRow = parsePortalRow(invalidRow);
assert.strictEqual(parsedInvalidRow, null);

const parsedTable = parsePortalTable([
    finalGradeRow,
    midtermOnlyRow,
    invalidRow,
]);

assert.deepStrictEqual(parsedTable, [
    { units: 3, grade: 4 },
    { units: 3, grade: 3 },
]);

console.log('parser tests passed');