const abbrevName = name =>
  name
    .split(' ')
    .map(n => n[0].toUpperCase())
    .join('.');

module.exports = abbrevName;
