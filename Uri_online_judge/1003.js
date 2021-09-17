var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const sum = lines.map(Number).reduce((a, e) => a + e);
console.log('SOMA = ' + sum);
