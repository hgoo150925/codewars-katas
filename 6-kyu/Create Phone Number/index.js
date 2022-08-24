const createPhoneNumber = (numbers) => {
    // let phoneNumber = numbers.join('').replace(/,/g, "");
    let phoneNumber = numbers.toString().replace(/,/g, "");
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
}

module.exports = createPhoneNumber;