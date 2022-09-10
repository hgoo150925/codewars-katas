const makeNegative = require('.');

describe('Return negative...', () => {
  test('Return -42', () => {
    expect(makeNegative(42)).toBe(-42);
  });

  test('Return -1', () => {
    expect(makeNegative(1)).toBe(-1);
  });

  test('Return -5', () => {
    expect(makeNegative(-5)).toBe(-5);
  });

  test('Return 0', () => {
    expect(makeNegative(0)).toBe(0);
  });

  test('Return -0.12', () => {
    expect(makeNegative(0.12)).toBe(-0.12);
  });
});
