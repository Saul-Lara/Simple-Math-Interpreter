"use strict";
exports.__esModule = true;
var prompt = require("prompt-sync")({ sigint: true });
while (true) {
	var text = prompt("Calc > ");
	console.log(text);
}
