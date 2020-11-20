import { tokenType, token } from "./tokens.js";

let WHITESPACE: string[] = [" ", "\n", "\t"];
let DIGITS: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

class lexer {
	text: string;
	current_char: string | null;
	position: number;

	constructor(text: string) {
		this.text = text;
		this.position = 0;
		this.current_char = this.text[this.position];
	}

	advance() {
		this.position += 1;
		this.current_char =
			this.position < this.text.length ? this.text[this.position] : null;
	}

	generateTokens() {
		try {
			let tokens: token[] = [];

			while (this.current_char != null) {
				if (WHITESPACE.includes(this.current_char)) {
					this.advance();
				} else if (
					this.current_char == "." ||
					DIGITS.includes(this.current_char)
				) {
					//this.generateNumber();
					tokens.push(this.generateNumber());
				} else if (this.current_char == "+") {
					this.advance();
					tokens.push(new token(tokenType.PLUS));
				} else if (this.current_char == "-") {
					this.advance();
					tokens.push(new token(tokenType.MINUS));
				} else if (this.current_char == "*") {
					this.advance();
					tokens.push(new token(tokenType.MULTIPLY));
				} else if (this.current_char == "/") {
					this.advance();
					tokens.push(new token(tokenType.DIVIDE));
				} else if (this.current_char == "(") {
					this.advance();
					tokens.push(new token(tokenType.LPAREN));
				} else if (this.current_char == ")") {
					this.advance();
					tokens.push(new token(tokenType.RPAREN));
				} else {
					throw new Error(
						`Analysis failed, Illegal character ${this.current_char}`
					);
				}
			}

			return tokens;
		} catch (error) {
			console.log(error.name + " : " + error.message);
		}
	}

	generateNumber() {
		let decimalPointCount = 0;
		let numberStr = this.current_char;
		this.advance();

		while (
			this.current_char != null &&
			(this.current_char == "." || DIGITS.includes(this.current_char))
		) {
			if (this.current_char == ".") {
				decimalPointCount += 1;
				if (decimalPointCount > 1) {
					break;
				}
			}

			numberStr += this.current_char;
			this.advance();
		}

		if (numberStr.startsWith(".")) {
			numberStr = "0" + numberStr;
		}

		if (numberStr.endsWith(".")) {
			numberStr += "0";
		}

		return new token(tokenType.NUMBER, parseFloat(numberStr));
	}
}

export { lexer };
