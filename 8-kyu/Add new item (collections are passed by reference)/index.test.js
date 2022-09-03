const addExtra = require('.');

describe('Testing...', () => {
  test('Retorna 4', () => {
    let result = 4;
    expect(addExtra([1, 2, 3]).length).toBe(result);
  });

  test('Retorna 3', () => {
    let result = 3;
    expect(addExtra([1, 2]).length).toBe(result);
  });

  test('Retorna 1', () => {
    let result = 1;
    expect(addExtra([]).length).toBe(result);
  });
});
