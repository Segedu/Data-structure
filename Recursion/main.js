function sum(total, array) {
    if (array.length > 0) {
        total += array.pop()
        return sum(total, array)
    }
    return total
}
const array = [1, 2, 3, 4]
const num = 0
console.log(sum(num, array))