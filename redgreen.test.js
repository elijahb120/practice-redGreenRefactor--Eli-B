
const redgreen = require('../redgreen.js');

describe ( "redgreen", () => {
    test("should return number of vowels", () => {
        expect(redgreen.countVowels("Hello")).toBe(2);
    });

});