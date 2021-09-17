var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = 3.14159;
const area = n * Math.pow(Number(lines[0]), 2);
console.log('A=' + area.toFixed(4));
