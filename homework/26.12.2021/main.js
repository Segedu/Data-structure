//!1
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// console.log(sumArray(numbersArray));

//!2
// const numArray = [1, 2, 3, 4, 5];
// function multiple(array) {
//     let multiSum = 1
//     for (let i = 0; i < array.length; i++) {
//         multiSum *= array[i]
//     }
//     return multiSum;
// }
// console.log(multiple(numArray));

//!3

// function sumIntegerValues(number) {
//     let sum = 0
//     let num2 = number;
//     let sum2 = (num2 % 10)
//     let num3 = (num2 - sum2) / 10
//     console.log({ num3 });
//     console.log({ sum, sum2 });
// }
// console.log(sumIntegerValues(572))

//!4-a
// const agesArray = [8, 4, 22, 60, 2, 3];

// function minAge(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i]
//         }
//     }
//     return min
// }

// console.log(minAge(agesArray));

//!4-b

// function maxAge(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max
// }

// console.log(maxAge(agesArray));

//!4-c
// function agesSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum;
// }

// console.log(agesSum(agesArray));

//!4-d
// function agesAverage(array) {
//     let average = 1;
//     let sum = agesSum(array)
//     average = sum / array.length
//     return average;
// }

// console.log(agesAverage(agesArray));

//!5

