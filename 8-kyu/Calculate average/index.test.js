const find_average = require('.');

describe('Find average...', () => {
  test('Return 1', () => {
    expect(find_average([1, 1, 1])).toBe(1);
  });

  test('Return 2', () => {
    expect(find_average([1, 2, 3])).toBe(2);
  });

  test('Return 2.5', () => {
    expect(find_average([1, 2, 3, 4])).toBe(2.5);
  });
});
