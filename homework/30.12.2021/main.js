function sumIntegerValues(number, total) {
    if (number > 0) {
        total += (number % 10);
        let divideByTen = number / 10
        let updatedNum = parseInt(divideByTen)
        return sumIntegerValues(updatedNum, total)
    }
    return (total)

}
console.log(sumIntegerValues(333, 0))