const moveZeros = arr => {
  const zeros = arr.filter(n => n === 0);
  const data = arr.filter(n => n !== 0);
  return [...data, ...zeros];
};

module.exports = moveZeros;
