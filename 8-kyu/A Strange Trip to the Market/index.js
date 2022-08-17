// const isLockNessMonster = s =>
//   s.includes('tree fiddy') || s.includes('three fifty') || s.includes('3.50')
const isLockNessMonster = s => /tree fiddy|three fifty|3.50/.test(s);

module.exports = isLockNessMonster;
