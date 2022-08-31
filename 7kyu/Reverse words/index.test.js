const reverseWords = require('.')

describe('Testing...', function () {
    test('Test 1', () => {
        let result = 'ehT kciuq nworb xof spmuj revo eht yzal .god';
        expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe(result);
    });

    test('Test 2', () => {
        let result = 'elppa';
        expect(reverseWords('apple')).toBe(result);
    });

    test('Test 3', () => {
        let result = 'a b c d';
        expect(reverseWords('a b c d')).toBe(result);
    });

    test('Test 4', () => {
        let result = 'elbuod  decaps  sdrow';
        expect(reverseWords('double  spaced  words')).toBe(result);
    });
});
