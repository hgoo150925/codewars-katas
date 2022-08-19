const uniqueInOrder = require('.');

test('Test 1', () => {
  expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(
    uniqueInOrder(['A', 'B', 'C', 'D', 'A', 'B'])
  );
});

test('Test 2', () => {
  expect(uniqueInOrder('ABBCcAD')).toEqual(
    uniqueInOrder(['A', 'B', 'C', 'c', 'A', 'D'])
  );
});
