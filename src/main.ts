import { lexer } from "./lexer.js";
import { parser } from "./parser.js";
import { interpreter } from "./interpreter.js";

try {
	let text = "(1-2)+(4*5-3)-5";
	console.log(text);
	let lex = new lexer(text);
	let tokens = lex.generateTokens();

	if (tokens != null) {
		let parserClass = new parser(tokens);
		let tree = parserClass.parse();
		//console.log(tree);
		if (tree) {
			let inter = new interpreter();
			let result = inter.visit(tree);
			if (result) {
				console.log(result.value);
			}
		}
	}
} catch (error) {
	console.log(error.name + " : " + error.message);
}
