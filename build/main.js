import { lexer } from "./lexer.js";
let text = "5 + 5";
console.log(text);
let lex = new lexer(text);
let tokens = lex.generateTokens();
if (tokens != null) {
	let tokensList = tokens.map((token) => token.info());
	console.log(tokensList);
}
