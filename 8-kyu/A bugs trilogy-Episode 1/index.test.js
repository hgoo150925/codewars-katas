const abbrevName = require('.');

describe('Testing...', () => {
  test('Test 1', () => {
    let result = 'S.H';
    expect(abbrevName('Sam Harris')).toBe(result);
  });

  test('Test 2', () => {
    let result = 'P.F';
    expect(abbrevName('Patrick Feenan')).toBe(result);
  });

  test('Test 3', () => {
    let result = 'E.C';
    expect(abbrevName('Evan Cole')).toBe(result);
  });


  test('Test 4', () => {
    let result = 'P.F';
    expect(abbrevName('P Favuzzi')).toBe(result);
  });


  test('Test 5', () => {
    let result = 'D.M';
    expect(abbrevName('David Mendieta')).toBe(result);
  });
});
