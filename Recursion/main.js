const array = [1, 2, 3, 4];
const num = 0;

function calcSum(sum, array) {
    if (array.length > 0) {
        sum += array.pop();
        return calcSum(sum, array)
    }
    return sum;
}


// console.log(calcSum(num, array));

function sum(total, array) {
    if (array.length > 0) {
        total += array.shift()
        return sum(total, array)
    }
    return total
}

// console.log(sum(num, array))
