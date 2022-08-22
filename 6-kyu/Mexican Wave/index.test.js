const wave = require('.')


describe('Testing...', function () {

    test('Test 1', () => {
        let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
        expect(wave("hello")).toEqual(result);
    });

    test('Test 2', () => {
        let result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
        expect(wave("codewars")).toEqual(result);
    });

    test('Test 3', () => {
        let result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
        expect(wave("two words")).toEqual(result);
    });

    test('Test 4', () => {
        let result = [" Gap ", " gAp ", " gaP "];
        expect(wave(" gap ")).toEqual(result);
    });
});
