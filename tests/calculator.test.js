const calculateGWA = require('../src/core/gwa-calculator');

const sampleCourses = [
    { name: "Math", units: 3, grade: 4.0 },
    { name: "Physics", units: 2, grade: 2.0 },
    { name: "English", units: 1, grade: 1.5 },
];

const result = calculateGWA(sampleCourses);
console.log("GWA: ", result);