var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines.map(Number)
console.log('PROD = ' + (numbers[0] * numbers[1]));
