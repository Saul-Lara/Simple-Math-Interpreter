export {};

const prompt = require("prompt-sync")({ sigint: true });

while (true) {
	let text = prompt("Calc > ");
	console.log(text);
}
