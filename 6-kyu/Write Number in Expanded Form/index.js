const expandedForm = num => {
    num = num.toString();
    const equation = [];
    let multiplier = 1;

    for (let index = 1; index <= num.length; index++) {
        const digit = num[num.length - index];

        digit > 0 && equation.unshift(digit * multiplier);
        multiplier *= 10;
    }
    return equation.join(' + ');
}


module.exports = expandedForm;