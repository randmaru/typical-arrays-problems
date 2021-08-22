exports.min = min = (...array) => {
    if (array.length >= 1) {
        return Math.min(...array);
    } else {
        return 0;
    }
};

exports.max = max = (...array) => {
    if (array.length >= 1) {
        return Math.max(...array);
    } else {
        return 0;
    }
};

exports.avg = avg = (...array) => {
    if (array.length >= 1) {
        return [...array].reduce((a, b) => a + b, 0) / array.length;
    } else {
        return 0;
    }
};

console.log(min(1, 2, 3, 4));
console.log(max(1, 2, 3, 4));
console.log(avg(1, 2, 3, 4));
