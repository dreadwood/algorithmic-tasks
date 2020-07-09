
// You should implement your task here.

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
