const positiveSum = require('.');

describe('Sum of positive...', () => {
  test('Return 15', () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('Return 13', () => {
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
  });

  test('Return 0', () => {
    expect(positiveSum([])).toBe(0);
  });

  test('Return 0', () => {
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
  });

  test('Return 9', () => {
    expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
  });
});
