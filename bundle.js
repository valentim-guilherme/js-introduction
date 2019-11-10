"use strict";

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
} // arrow style 
//const soma = (a = 3, b = 6) => a + b;


console.log(soma(1, 2));
console.log(soma(1));
console.log(soma());
