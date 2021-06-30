// solution 1
module.exports = function towelSort (matrix) {
  var arrayMatrix = [];

  if (matrix) {
    matrix.forEach(function (arr, i) {
      if (i % 2 === 0) {
        arr.forEach(function (num) {
          arrayMatrix.push(num);
        }); 
      } else {
        arr.reverse().forEach(function (num) {
          arrayMatrix.push(num);
        }); 
      }
    });
  }

  return arrayMatrix;
};

// solution 2
// module.exports = function towelSort (matrix) {
//   if (!matrix || matrix.length === 0) {
//     return [];
//   }

//   return matrix.reduce((acc, item, i) => 
//     (i % 2 !== 0) ? [...acc, ...item.reverse()] : [...acc, ...item], 
//     []);
// }