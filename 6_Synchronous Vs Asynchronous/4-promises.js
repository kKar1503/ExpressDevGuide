const { readFile } = require('fs/promises');

readFile('TextFile.txt', 'utf8')
	.then((data) => console.log(data))
	.catch((e) => console.error(e))
	.finally(() => console.log('TEST'));
