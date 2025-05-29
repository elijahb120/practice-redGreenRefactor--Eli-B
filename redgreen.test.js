const {countVowels} = require('../redgreen.js');

describe ( "redgreen", () => {
    //positive test
    test("should return number of vowels", () => {
        expect(countVowels("Hello")).toBe(2);
    });
    //negative test
    test('should not accept numbers', () => {
        expect(countVowels("5")).toEqual(`String cannot be a number`);
    });
    //edge case test
    test('should return 0 when an empty string is passed through' , () => {
        expect(countVowels("")).toEqual(0)
    })
});
