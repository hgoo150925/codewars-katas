
const expandedForm = require('.');

describe('Testing...', function () {
    test('Test 1', () => {
        let result = '10 + 2';
        expect(expandedForm(12)).toBe(result);
    });

    test('Test 2', () => {
        let result = '40 + 2';
        expect(expandedForm(42)).toBe(result);
    });

    test('Test 3', () => {
        let result = '70000 + 300 + 4';
        expect(expandedForm(70304)).toBe(result);
    });
});