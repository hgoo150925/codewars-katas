const createPhoneNumber = require('.')


describe('Testing...', function () {

    test('Test 1', () => {
        let result = "(123) 456-7890";
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(result);
    });

    test('Test 2', () => {
        let result = "(111) 111-1111";
        expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(result);
    });

    test('Test 3', () => {
        let result = "(123) 456-7890";
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(result);
    });

});
