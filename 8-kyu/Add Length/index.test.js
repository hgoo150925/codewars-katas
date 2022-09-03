const addLength = require('.');

describe('Testing...', () => {
  test("Retorna ['apple 5', 'ban 3']", () => {
    let result = ['apple 5', 'ban 3'];
    expect(addLength('apple ban')).toEqual(result);
  });

  test("Retorna ['you 3', 'will 4', 'win 3']", () => {
    let result = ['you 3', 'will 4', 'win 3'];
    expect(addLength('you will win')).toEqual(result);
  });
});
