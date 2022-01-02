//!1
function sumNumValues(number, total) {
    if (number > 0) {
        total += (number % 10);
        let updatedNum = parseInt(number / 10);
        return sumNumValues(updatedNum, total);
    }
    return total;
}
console.log(sumNumValues(285, 0));

//!2 works only if the array is sorted
// function findMinInArray(array, min) {
//     if (array[1] < min) {
//         min = array[1]
//         array.shift()
//         return (findMinInArray(array, min))
//     }
//     return min
// }
// const array = [7, 4, 3, 2, -2, -20];
// console.log(findMinInArray(array, array[0]));

//!2-second option
// function findMinInArray(array, min, count) {
//     if (array[0 + count] < min) {
//         min = array[0 + count]
//         count++;
//         array.shift()
//         console.log(array[0 + count]);
//         return (findMinInArray(array, min, count))
//     }
//     return min
// }
// const array = [7, 4, 3, 2, -2, -20];
// console.log(findMinInArray(array, array[0], 0));

//!3
// function insertToArray(count, array) {
//     if (count < 3) {
//         const userInput = Number(prompt("enter number"));
//         if (userInput !== 0 && userInput !== " " && userInput === userInput) {
//             array.push(userInput);
//             count++;
//         }
//         return insertToArray(count, array);
//     }
//     return array
// }
// const array = [];
// console.log(insertToArray(0, array));

//!4

// function MergeSort(arr, left, right) {
//     console.log({ arr, left, right });
//     if (right > left) {
//         let middle = left + (right - left) / 2;
//         MergeSort(arr, left, middle)
//         MergeSort(arr, middle + 1, right)
//         merge(arr, left, middle, right)
//     }
//     return arr
// }
// const array = [38, 27, 43, 3, 9, 82, 10];
// console.log(MergeSort(array, array[0], array[6]))