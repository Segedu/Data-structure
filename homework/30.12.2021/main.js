//!1
// function sumNumValues(number, total) {
//     if (number > 0) {
//         total += (number % 10);
//         let divideByTen = number / 10
//         let updatedNum = parseInt(divideByTen)
//         return sumNumValues(updatedNum, total)
//     }
//     return (total)

// }
// console.log(sumNumValues(333, 0))

//!2 works only if the array is sorted
function findMinInArray(array, min) {
    if (array[1] < min) {
        min = array[1]
        array.shift()
        return (findMinInArray(array, min))
    }
    return min
}
const array = [7, 4, 3, 2, -2, -20];
console.log(findMinInArray(array, array[0]));