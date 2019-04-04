const numeralTable = {
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
const numeralKeys = Object.keys(numeralTable).reverse();

const romanTable = {
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
const romanKeys = Object.keys(romanTable).reverse();

class Converter {
  numeralToRoman(number) {
    let result = "";

    numeralKeys.forEach(key => {
      while (number >= parseInt(key)) {
        number -= parseInt(key);
        result += numeralTable[key];
      }
    });
    return result;
  }

  romanToNumber(roman) {
    let romanArray = roman.split('');
    let numeralArray = [];
    // Convert Roman to numeral
    romanArray.forEach(char => {
      return romanKeys.forEach(key => {
        if (key === char) {
          numeralArray.push(romanTable[key])
        }
      })
    });
    // Numbers lesser than subsequent number are treated as negative
    let resultArray = numeralArray.map((number, index, array) => {
      if (number < array[index + 1]) return array[index] * -1;
      else return number
    })
    // Sum all the number in array 
    return resultArray.reduce((a, b) => a + b)
  }
}

module.exports = new Converter();