function eval() {
  // Do not use eval!!!
  return;
};

function expressionCalculator(expr) {
  let openBracets = expr.split('').filter(function (bracet) {
    return bracet === '(';
  });
  let closeBracets = expr.split('').filter(function (bracet) {
    return bracet === ')';
  });

  if (openBracets.length !== closeBracets.length) {
    throw new Error('ExpressionError: Brackets must be paired');
  } 

  
  let stackNum = [];
  let stackSing = [];

  const mathOperation = {
    '+': function (a, b) {return +a + +b},
    '-': function (a, b) {return a - b}, 
    '*': function (a, b) {return a * b}, 
    '/': function (a, b) {return a / b}
  };

  const rangSing = {
    '+': 1,
    '-': 1, 
    '*': 2, 
    '/': 2
  };

  if (expr.split('').includes(' ') === false) {
    expr = expr.split('').join(' ');
  }


  let arrExpr = expr.split(" ");
  arrExpr = arrExpr.filter(function (item) {
    return item !== '';
  })


  arrExpr.forEach(function (item) {
    if (/[0-9]/.test(item)) {
      stackNum.push(item);
    } else if (item === ")") {
      while (stackSing[stackSing.length - 1] !== '(') {
        let lastOperation = stackSing.pop();
        let x = stackNum.pop();
        let y = stackNum.pop();
        if (lastOperation == '/' && x == 0) {
          throw new Error("TypeError: Division by zero.");
        }
        stackNum.push(mathOperation[lastOperation](y, x));
      }
      stackSing.pop();
    } else if (item === '(' || rangSing[stackSing[stackSing.length - 1]] < rangSing[item]) {
      stackSing.push(item);
    } else {
      while (rangSing[item] <= rangSing[stackSing[stackSing.length - 1]]) {
        let lastOperation = stackSing.pop();
        let x = stackNum.pop();
        let y = stackNum.pop();
        if (lastOperation == '/' && x == 0) {
          throw new Error("TypeError: Division by zero.");
        }
        stackNum.push(mathOperation[lastOperation](y, x));
      }
      stackSing.push(item);
    }
  })


  while (stackSing.length > 0) {
    let lastOperation = stackSing.pop();
    let x = stackNum.pop();
    let y = stackNum.pop();
    if (lastOperation == '/' && x == 0) {
      throw new Error("TypeError: Division by zero.");
    }
    stackNum.push(mathOperation[lastOperation](y, x));
  }

  
  return Number(stackNum.join())
};

module.exports = {
  expressionCalculator
};