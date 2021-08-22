exports.min = min = (array) => {
    if (array.length == 0) {
        return 0;
    } else {
        return Math.min(array);
    }
};

exports.max = max = (array) => {
    if (array.length == 0) {
        return 0;
    } else {
        return Math.max(array);
    }
};

exports.avg = avg = (...array) => {
    if (array.length == 0) {
        return 0;
    } else {
        return [...array].reduce((a, b) => a + b, 0) / array.length;
    }
};
