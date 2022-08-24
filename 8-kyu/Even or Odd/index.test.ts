import { even_or_odd } from './index';

describe('Testing...', () => {
  test('Test 1', () => {
    let result = 'Even';
    expect(even_or_odd(2)).toBe(result);
  });

  test('Test 2', () => {
    let result = 'Even';
    expect(even_or_odd(0)).toBe(result);
  });

  test('Test 3', () => {
    let result = 'Odd';
    expect(even_or_odd(7)).toBe(result);
  });

  test('Test 4', () => {
    let result = 'Odd';
    expect(even_or_odd(1)).toBe(result);
  });

  test('Test 5', () => {
    let result = 'Even';
    expect(even_or_odd(-4)).toBe(result);
  });

  test('Test 6', () => {
    let result = 'Odd';
    expect(even_or_odd(-3)).toBe(result);
  });
});
