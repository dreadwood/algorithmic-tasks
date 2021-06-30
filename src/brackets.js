// solution 1
module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.map(function (item) {
    return item.join('');
  });

  let i = 0
  while (i < brackets.length) {
    if (str.includes(brackets[i])) {
      str = str.replace(brackets[i], '');
      i = 0;
    } else {
      i++;
    }
  }
    
  let  message = (str) ? false : true;
  return message;
}

// solution 2
// module.exports = function check(str, bracketsConfig) {
//   if (str.length % 2 !== 0) {
//     return false
//   }
//   let strCopy = str;

//   const deleteBrackets = () => {
//     bracketsConfig.forEach((item) => {
//       const brackets = item.join('');
//       strCopy = strCopy.replace(brackets, '');

//       if (str !== strCopy) {
//         str = strCopy;
//         deleteBrackets();
//       }
//     });
//   }

//   deleteBrackets();
//   return strCopy.length === 0;
// }