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

  // console.log(arrBinaryWords);
  // console.log(arrMorseWords);
  return message;
}

module.exports = {
    decode
}