//!1
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray(numbersArray));

//!2
const numArray = [1, 2, 3, 4, 5];
function multiple(array) {
    let multiSum = 1
    for (let i = 0; i < array.length; i++) {
        multiSum *= array[i]
    }
    return multiSum;
}
console.log(multiple(numArray));

//!3

