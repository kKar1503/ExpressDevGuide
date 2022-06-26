const { readFile } = require('fs/promises');

const main = async () => {
	const data = await readFile('TextFile.txt', 'utf8');
	console.log(data);
};

main();

console.log('TEST');
