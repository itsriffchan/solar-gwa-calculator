function calculateGWA(courses){
    const excluded = [6.0, 7.0, 8.0, 9.0, 0.0];
    const validCourses = courses.filter(course => !excluded.includes(course.grade));
    const sumProducts = validCourses.reduce((total, course) => {
        return total + (course.grade * course.units);
    }, 0);
    const sumUnits = validCourses.reduce((total, course) => {
        return total + course.units;
    }, 0)

    if (sumUnits === 0) {
        return null;
    }
    return sumProducts / sumUnits;
}

module.exports = calculateGWA;
