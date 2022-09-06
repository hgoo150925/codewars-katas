const datingRange = require('.');

describe('Dating Range...', () => {
  test('Retorna 15-20', () => {
    let result = '15-20';
    expect(datingRange(17)).toBe(result);
  });

  test('Retorna 27-66', () => {
    let result = '27-66';
    expect(datingRange(40)).toBe(result);
  });

  test('Retorna 14-16', () => {
    let result = '14-16';
    expect(datingRange(15)).toBe(result);
  });

  test('Retorna 24-56', () => {
    let result = '24-56';
    expect(datingRange(35)).toBe(result);
  });

  test('Retorna 9-11', () => {
    let result = '9-11';
    expect(datingRange(10)).toBe(result);
  });
});
