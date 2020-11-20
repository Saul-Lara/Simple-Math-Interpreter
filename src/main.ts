import { lexer } from "./lexer.js";
import { parser } from "./parser.js";

try {
	let text = "(1-2)+(4*5-3)-5";
	console.log(text);
	let lex = new lexer(text);
	let tokens = lex.generateTokens();

	if (tokens != null) {
		let par = new parser(tokens);
		let pars = par.parse();
		console.log(pars);
	}
} catch (error) {
	console.log(error.name + " : " + error.message);
}

/*
if (tokens != null) {
	let tokensList = tokens.map((token) => token.info());
	console.log(tokensList);
}*/
