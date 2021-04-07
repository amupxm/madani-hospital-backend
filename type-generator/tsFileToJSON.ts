import readline from 'readline';
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('', (input) => {
	const inputArray = input.split(':');
	if (inputArray.length < 1) throw new Error('invalid input');
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const file = require(`${inputArray[0]}`);
	console.log(`%RES%${JSON.stringify(file.default[inputArray[1]])}%RES%`);
	rl.close();
});
