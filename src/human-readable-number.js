// solution 1
module.exports = function toReadable (number) {
  var readableNum = '';
  var x = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };

  if (number < 20) {
    readableNum = x[number];

  } else if ((number % 10 === 0) && (number < 100)) {
    readableNum = x[number];

  } else if (number < 100) {
    var arrNum = String(number);
    readableNum = x[arrNum[0]*10] + ' ' + x[arrNum[1]];

  } else if ((number % 100 === 0) && (number < 1000)) {
    readableNum = x[number / 100] + ' hundred';

  } else if ((number % 10 === 0) && (number < 1000)) {
    var arrNum = String(number);
    readableNum = x[arrNum[0]] + ' hundred ' + x[arrNum[1] * 10];

  } else if ((number % 100 < 20) && (number < 1000)) {
    var arrNum = String(number);
    readableNum = x[arrNum[0]] + ' hundred ' + x[Number(arrNum[1] * 10) + Number(arrNum[2])];

  } else if ((number % 100 > 20) && (number < 1000)) {
    var arrNum = String(number);
    readableNum = x[arrNum[0]] + ' hundred ' + x[arrNum[1] * 10] + ' ' + x[arrNum[2]];

  } else {
    readableNum = 'Sorry, number is too big'
  }

  return readableNum;
}

// solution 2
// module.exports = function toReadable (number) {
//   const NAME_OF_NUMBERS = {
//       0: 'zero',
//       1: 'one',
//       2: 'two',
//       3: 'three',
//       4: 'four',
//       5: 'five',
//       6: 'six',
//       7: 'seven',
//       8: 'eight',
//       9: 'nine',
//       10: 'ten',
//       11: 'eleven',
//       12: 'twelve',
//       13: 'thirteen',
//       14: 'fourteen',
//       15: 'fifteen',
//       16: 'sixteen',
//       17: 'seventeen',
//       18: 'eighteen',
//       19: 'nineteen',
//       20: 'twenty',
//       30: 'thirty',
//       40: 'forty',
//       50: 'fifty',
//       60: 'sixty',
//       70: 'seventy',
//       80: 'eighty',
//       90: 'ninety',
//   };

//   const myFunc = (num) => {
//     if (num in NAME_OF_NUMBERS) {
//         return NAME_OF_NUMBERS[num];
//       }
    
//     const modulo = num % 10;
//     return `${NAME_OF_NUMBERS[num - modulo]} ${NAME_OF_NUMBERS[modulo]}`;
//   };

//   if (number < 100) {
//     return myFunc(number);
//   }

//   const modulo = number % 100;
//   return (modulo === 0) 
//     ? `${NAME_OF_NUMBERS[(number - modulo) / 100]} hundred`
//     : `${NAME_OF_NUMBERS[(number - modulo) / 100]} hundred ${myFunc(modulo)}`;
// }