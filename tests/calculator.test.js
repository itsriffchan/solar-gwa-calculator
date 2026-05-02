const assert = require('assert');
const calculateGWA = require('../src/core/gwa-calculator');

const sampleCourses = [
    { name: 'Math', units: 3, grade: 4.0 },
    { name: 'Physics', units: 2, grade: 2.0 },
    { name: 'English', units: 1, grade: 1.5 },
];

const gwa = calculateGWA(sampleCourses);
assert.strictEqual(Number(gwa.toFixed(2)), 2.92);

const excludedGradeCourses = [
    { name: 'PE', units: 3, grade: 6.0 },
    { name: 'NSTP', units: 2, grade: 0.0 },
];

const noValidCoursesResult = calculateGWA(excludedGradeCourses);
assert.strictEqual(noValidCoursesResult, null);

console.log('calculator tests passed');