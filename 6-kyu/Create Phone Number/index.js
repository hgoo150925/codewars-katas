function createPhoneNumber(numbers) {
    return numbers.toString().split(' ').join('')
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
module.exports = createPhoneNumber