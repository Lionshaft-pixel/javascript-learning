const grades = [40, 75, 80, 92, 52, 26, 74];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(`Maximum Grades: ${maximum}`);
console.log(`Minimum Grades: ${minimum}`);

function getMax(accumulate, element){
    return Math.max(accumulate, element);
}

function getMin(accumulate, element){
    return Math.min(accumulate, element);
}
