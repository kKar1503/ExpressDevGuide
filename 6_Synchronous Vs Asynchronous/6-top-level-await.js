const { readFile } = require('fs/promises');

const data = await readFile('TextFile.txt', 'utf8');
console.log(data);

console.log('TEST');
