const uniqueInOrder = iterable => {
  return typeof iterable === 'object'
    ? iterable.filter((_, index, array) => array[index] !== array[index + 1])
    : iterable
        .split('')
        .filter((_, index, array) => array[index] !== array[index + 1]);
};

module.exports = uniqueInOrder;
