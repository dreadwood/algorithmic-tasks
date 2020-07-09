
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
