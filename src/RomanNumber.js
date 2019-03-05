const ROMAN_ONE = "I";
const ROMAN_FOUR = "IV";
const ROMAN_FIVE = "V";
const ROMAN_NINE = "IX";
const ROMAN_TEN = "X";
const ROMAN_FORTY = "XL";
const NUMERIC_FOUR = 4;
const NUMERIC_FIVE = 5;
const NUMERIC_NINE = 9;
const NUMERIC_TEN = 10;
const NUMERIC_FORTY = 40;
const EMPTY_STRING = "";

class RomanNumber {
  perform(input) {
    let number = Number(input);
    if (isNumericForty(number)) {
      return ROMAN_FORTY;
    }
    if (isBetweenNumeric10and39(number)) {
      let firstDigitNum = EMPTY_STRING;
      let multiple = number / NUMERIC_TEN;
      let secondDigitNum = ROMAN_TEN.repeat(multiple);
      if (isNotDivisibleBy10(number)) {
        let numArray = number.toString().split("");
        let firstDigitNumber = Number(numArray[1]);
        firstDigitNum = convertNumBetween1and9IntoRoman(firstDigitNumber);
      }
      return secondDigitNum + firstDigitNum;
    }
    return convertNumBetween1and9IntoRoman(number);
  }
}

module.exports = new RomanNumber();

function isNumericForty(number) {
  return number === NUMERIC_FORTY;
}

function isBetweenNumeric10and39(number) {
  return number >= NUMERIC_TEN;
}
function isNotDivisibleBy10(number) {
  return number % NUMERIC_TEN !== 0;
}

function convertNumBetween1and9IntoRoman(number) {
  if (isNumeric9(number)) {
    return ROMAN_NINE;
  }
  if (isBetweenNumeric6and8(number)) {
    let remainder = number % NUMERIC_FIVE;
    let romanRemaider = ROMAN_ONE.repeat(remainder);
    return ROMAN_FIVE + romanRemaider;
  }
  if (isNumeric5(number)) {
    return ROMAN_FIVE;
  }
  if (isNumeric4(number)) {
    return ROMAN_FOUR;
  }
  return ROMAN_ONE.repeat(number);
}

function isNumeric9(number) {
  return number === NUMERIC_NINE;
}
function isBetweenNumeric6and8(number) {
  return number > NUMERIC_FIVE;
}
function isNumeric5(number) {
  return number === NUMERIC_FIVE;
}
function isNumeric4(number) {
  return number === NUMERIC_FOUR;
}
