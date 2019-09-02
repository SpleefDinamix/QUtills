//Functions Plus+
//Checks if a value is a number
function isNumber(n) {
    return !isNaN(+n) && isFinite(n) ? n + 1 === parseFloat(n) + 1 : false;
}

//Returns a new array with values from start to end (not included);
function range(start = 0, end = 0, step = 1) {
    let result = [];
    for (let x = start; x < end; x += step) {
        result.push(x);
    }
    return result;
}

//Math Plus+
//Creates a new array in a statistical order
Math.sortOrder = function (array) {
    if (array.areNumbers()) {
        const result = array.slice();
        let canSwap = true;
        while (canSwap) {
            canSwap = false;
            for (let i = 0; i < result.length - 1; i++) {
                if (result[i] > result[i + 1]) {
                    canSwap = true;
                    let temp = result[i + 1];
                    result[i + 1] = result[i];
                    result[i] = temp;
                }
            }
        }
        return result;
    } else
        throw new Error("Array contains NaN values");
}

//Median find the average value of the statistical order
Math.median = function (array) {
    if (array.length > 0) {
        if (array.areNumbers()) {
            let mid = array[Math.floor(array.length / 2)];
            if (array.length % 2 !== 0)
                return mid;
            else
                return (mid + array[Math.floor(array.length / 2) - 1]) / 2;
        } else
            throw new Error("Array contains NaN values")
    } else
        throw new Error("Can't use Math.median on an empty array");
}

//Mode finds the most repeated value in a statistical order
Math.mode = function (array) {
    if (array.areNumbers()) {
        let template = new Set(array);
        template = [...template];
        const count = [];

        for (let c in template) {
            count[c] = 0;
        }
        for (let i in template) {
            for (let x in array) {
                if (template[i] === array[x])
                    count[i]++;
            }
        }
        const maxCount = Math.max(...count);
        let match = count.indexOf(maxCount);
        let result = [];

        while (match >= 0) {
            result.push(template[match]);
            count[match] = 0;
            match = count.indexOf(maxCount);
        }

        if (result.length < 2)
            return new Number(...result);
        else if (result.length === template.length)
            return false;
        else
            return result;
    } else
        throw new Error("Array contains NaN values");
}

//Sums all values of an array
Math.sum = function (array) {
    if (array.areNumbers()) {
        let result = 0;
        for (let x of array) {
            result += x;
        }
        return result;
    } else
        throw new Error("Array contains NaN values")
}

//Finds the average from the values of an array
Math.average = function (array) {
    return result = Math.sum(array) / array.length;
}

//Finds the factorial of a number
Math.factorial = function (num) {
    let total = 1;
    for (i = 0; i < num; i++) {
        total = total * (num - i);
    }
    return total;
}

//Finding first element in an array
Array.prototype.first = function () {
    if (this.length > 0)
        return this[0];
    else
        throw new Error("Can't use .fist() on an empty array!")
}

//Finding last element in an array
Array.prototype.last = function () {
    if (this.length > 0)
        return this[this.length - 1];
    else
        throw new Error("Can't use .last() on an empty array!")
}

//Finds if all values are digits
Array.prototype.areNumbers = function () {
    let result = true;
    for (let i of this) {
        if (!isNumber(i)) {
            result = false;
            break;
        }
    }
    return result;
}

//Counts how many times a value is present in an array
Array.prototype.count = function (value) {
    let result = 0;
    for (let x of this) {
        if (value === x)
            result++
    }
    return result;
}