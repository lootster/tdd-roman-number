const romanNumber = require("../src/RomanNumber")

test('should return I if input is 1', () => {
    let result = romanNumber.perform("1");
    expect(result).toBe("I")
});
test('should return IV if input is 4', () => {
    let result = romanNumber.perform("4");
    expect(result).toBe("IV")
});
test('should return V if input is 5', () => {
    let result = romanNumber.perform("5");
    expect(result).toBe("V")
});
test('should return VI if input is 6', () => {
    let result = romanNumber.perform("6");
    expect(result).toBe("VI")
});
test('should return VIII if input is 9', () => {
    let result = romanNumber.perform("8");
    expect(result).toBe("VIII")
});
test('should return IX if input is 9', () => {
    let result = romanNumber.perform("9");
    expect(result).toBe("IX")
});
test('should return X if input is 10', () => {
    let result = romanNumber.perform("10");
    expect(result).toBe("X")
});
test('should return XX if input is 20', () => {
    let result = romanNumber.perform("20");
    expect(result).toBe("XX")
});
test('should return XXXI if input is 31', () => {
    let result = romanNumber.perform("31");
    expect(result).toBe("XXXI")
});
test('should return XXXIV if input is 34', () => {
    let result = romanNumber.perform("34");
    expect(result).toBe("XXXIV")
});
test('should return XXXV if input is 35', () => {
    let result = romanNumber.perform("35");
    expect(result).toBe("XXXV")
});
test('should return XXXIX if input is 39', () => {
    let result = romanNumber.perform("39");
    expect(result).toBe("XXXIX")
});
test('should return XL if input is 40', () => {
    let result = romanNumber.perform("40");
    expect(result).toBe("XL")
});
