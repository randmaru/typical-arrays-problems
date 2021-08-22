exports.min = min = (...array) => {
    if (array.length == 0 || !array) {
        return 0;
    } else {
        return Math.min(...array);
    }
};

exports.max = max = (...array) => {
    if (array.length == 0 || !array) {
        return 0;
    } else {
        return Math.max(...array);
    }
};

exports.avg = avg = (...array) => {
    if (array.length == 0 || !array) {
        return 0;
    } else {
        return [...array].reduce((a, b) => a + b, 0) / array.length;
    }
};

console.log(min(1, 2, 3, 4));
console.log(max(1, 2, 3, 4));
console.log(avg(1, 2, 3, 4));
