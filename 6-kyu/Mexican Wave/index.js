const wave = (str) => {
    return [...str].map((array, index) =>
        str.slice(0, index) + array.toUpperCase() + str.slice(index + 1)
    ).filter(x => x !== str);
}


module.exports = wave