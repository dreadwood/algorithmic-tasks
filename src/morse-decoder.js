const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

// solution 1
const MORSE_BINARY = {
  '00': '',
  '10': '.',
  '11': '-',
  'space': '**********' 
};

function decode(expr) {
  let regexp = /(.{1,2})/gim;

  let arrBinaryWords = [];
  for (let i = 0; i < expr.length; i += 10) {
    arrBinaryWords.push(expr.substring(i, i + 10));
  }

  
  let arrMorseWords = [];
  arrBinaryWords.forEach(function(item) {
    if (item === MORSE_BINARY.space) {
      arrMorseWords.push(MORSE_BINARY.space);
    } else {
      let morseSymbol = '';
      item.match(regexp).forEach(function(element) {
        morseSymbol += MORSE_BINARY[element];
      });
      arrMorseWords.push(morseSymbol);
    }
  });

  let message = '';
  arrMorseWords.forEach(function(item) {
    message += MORSE_TABLE[item];
  })

  return message;
}

// solution 2
// const DECODER_TABLE = {
//   '**********': ' ',
//   '10': '.',
//   '11': '-',
//   '00': '',
// };

// function decode(expr) {
//   const arrayCodedLetters = expr.match(/.{1,10}/g);

//   return arrayCodedLetters.map((letter) => {
//     if (letter in DECODER_TABLE) {
//       return DECODER_TABLE[letter];
//     }

//     const arrayCodingKey = letter.match(/.{1,2}/g);
//     const morseLetter = arrayCodingKey.reduce((acc, item) => acc += DECODER_TABLE[item], '');

//     return MORSE_TABLE[morseLetter];
//   }).join('')
// };

module.exports = {
    decode
}