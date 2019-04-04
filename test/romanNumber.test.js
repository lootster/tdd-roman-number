const convert = require("../src/RomanNumber")

describe('convert Numeral to Roman', () => {
    test('should return I if input is 1', () => {
        let result = convert.numeralToRoman("1");
        expect(result).toBe("I")
    });
    test('should return IV if input is 4', () => {
        let result = convert.numeralToRoman("4");
        expect(result).toBe("IV")
    });
    test('should return V if input is 5', () => {
        let result = convert.numeralToRoman("5");
        expect(result).toBe("V")
    });
    test('should return VI if input is 6', () => {
        let result = convert.numeralToRoman("6");
        expect(result).toBe("VI")
    });
    test('should return VIII if input is 9', () => {
        let result = convert.numeralToRoman("8");
        expect(result).toBe("VIII")
    });
    test('should return IX if input is 9', () => {
        let result = convert.numeralToRoman("9");
        expect(result).toBe("IX")
    });
    test('should return X if input is 10', () => {
        let result = convert.numeralToRoman("10");
        expect(result).toBe("X")
    });
    test('should return XX if input is 20', () => {
        let result = convert.numeralToRoman("20");
        expect(result).toBe("XX")
    });
    test('should return XXXI if input is 31', () => {
        let result = convert.numeralToRoman("31");
        expect(result).toBe("XXXI")
    });
    test('should return XXXIV if input is 34', () => {
        let result = convert.numeralToRoman("34");
        expect(result).toBe("XXXIV")
    });
    test('should return XXXV if input is 35', () => {
        let result = convert.numeralToRoman("35");
        expect(result).toBe("XXXV")
    });
    test('should return XXXIX if input is 39', () => {
        let result = convert.numeralToRoman("39");
        expect(result).toBe("XXXIX")
    });
    test('should return XL if input is 40', () => {
        let result = convert.numeralToRoman("40");
        expect(result).toBe("XL")
    });
});

describe('Convert Roman to Numeral', () => {
    test('should return 1 if input is I', () => {
        let result = convert.romanToNumber("I");
        expect(result).toBe(1);
    });
    test('should return 4 if input is IV', () => {
        let result = convert.romanToNumber("IV");
        expect(result).toBe(4);
    });
    test('should return 5 if input is V', () => {
        let result = convert.romanToNumber("V");
        expect(result).toBe(5)
    });
    test('should return 6 if input is VI', () => {
        let result = convert.romanToNumber("VI");
        expect(result).toBe(6)
    });
});