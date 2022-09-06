const lovefunc = require('.');

describe('Love Function...', () => {
  test('Return true', () => {
    expect(lovefunc(1, 4)).toBeTruthy();
  });

  test('Return false', () => {
    expect(lovefunc(2, 2)).toBeFalsy();
  });

  test('Return true', () => {
    expect(lovefunc(0, 1)).toBeTruthy();
  });

  test('Return false', () => {
    expect(lovefunc(0, 0)).toBeFalsy();
  });
});
