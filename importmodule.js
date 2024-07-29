// main.js
const http = require('http');

// Correct path to the module, adjust if your folder structure is different
const { addNumber, subtractNumber, divideNumber, multiplyNumber } = require('./export');

console.log(addNumber(10, 5));
console.log(subtractNumber(10, 5));
console.log(divideNumber(10, 5));
console.log(multiplyNumber(10, 5));
