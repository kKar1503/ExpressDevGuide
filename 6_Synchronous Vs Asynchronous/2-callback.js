const fs = require('fs');

fs.readFile('TextFile.txt', 'utf8', (err, data) => {
	console.log('File data is', data);
});

console.log('TEST');
