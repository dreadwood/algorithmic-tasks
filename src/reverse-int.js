// solution 1
module.exports = function reverse(n) {
  var strOfNum = String(Math.abs(n));
  var reverseStr = '';
  for (var i = strOfNum.length - 1; i >= 0; i--) {
    reverseStr += strOfNum[i];
  }

  return Number(reverseStr);
}

// solution 2
// module.exports = function reverse (n) {
//   const modulus = Math.abs(n);
//   return Number(Array.from(String(modulus)).reverse().join(''));
// }