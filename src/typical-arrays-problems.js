// solution 1
exports.min = function min (array) {
  var x = 0;
  if (array) {
    if (array.length > 1) {
      array.sort(function(a, b) {
        return a - b;
      });
      x = array[0];
    }
  }
  
  return x;
}

exports.max = function max (array) {
  var x = 0;
  if (array) {
    if (array.length > 1) {
      array.sort(function(a, b) {
        return a - b;
      });
      x = array[array.length - 1];
    }
  }
  
  return x;
}

exports.avg = function avg (array) {
  var x = 0;
  if (array) {
    if (array.length > 1) {
      array.sort(function(a, b) {
        return a - b;
      });
      var sum = 0;
      for (var i = 0; i < array.length; i++) {
        sum += array[i]
      }
      x = sum / array.length;
    }
  }
  
  return x;
}


// solution 2
// exports.min = function min (array) {
//   if (!array || array.length === 0) {
//     return 0;
//   }
  
//   return array.sort((a, b) => a - b)[0]
// }

// exports.max = function max (array) {
//   if (!array || array.length === 0) {
//     return 0;
//   }

//   return array.reduce((acc, item) => acc = (item > acc) ? acc = item : acc, 0);
// }

// exports.avg = function avg (array) {
//   if (!array || array.length === 0) {
//     return 0;
//   }

//   return array.reduce((acc, item) => acc + item, 0) / array.length;  
// }
