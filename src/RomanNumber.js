const numberToRomanTable = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
};
const numeralKeys = Object.keys(numberToRomanTable).reverse();

const romanToNumberTable = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1
};
const romanKeys = Object.keys(romanToNumberTable).reverse();

class Convert {
  numeralToRoman(number) {
    let result = "";

    numeralKeys.forEach(key => {
      while (number >= parseInt(key)) {
        number -= parseInt(key);
        result += numberToRomanTable[key];
      }
    });
    return result;
  }

  romanToNumber(roman) {
    let romanArray = roman.split('');
    let numberArray = [];
    // Convert Roman to numeral
    romanArray.forEach(char => {
      return romanKeys.forEach(key => {
        if (key === char) {
          numberArray.push(romanToNumberTable[key])
        }
      })
    });
    // Numbers lesser than subsequent number are treated as negative
    let number = numberArray.map((num, index, array) => {
      if (num < array[index + 1]) return array[index] * -1;
      else return num
    })
    // Sum all the number in array 
    return number.reduce((a, b) => a + b)
  }
}

module.exports = new Convert();