import { tokenType, token } from "./tokens.js";
let WHITESPACE = [" ", "\n", "\t"];
let DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
class lexer {
    constructor(text) {
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
            let tokens = [];
            while (this.current_char != null) {
                if (WHITESPACE.includes(this.current_char)) {
                    this.advance();
                }
                else if (this.current_char == "." ||
                    DIGITS.includes(this.current_char)) {
                    let number = this.generateNumber();
                    if (number) {
                        tokens.push(number);
                    }
                    else {
                        throw new Error(`Analysis failed`);
                    }
                }
                else if (this.current_char == "+") {
                    this.advance();
                    tokens.push(new token(tokenType.PLUS));
                }
                else if (this.current_char == "-") {
                    this.advance();
                    tokens.push(new token(tokenType.MINUS));
                }
                else if (this.current_char == "*") {
                    this.advance();
                    tokens.push(new token(tokenType.MULTIPLY));
                }
                else if (this.current_char == "/") {
                    this.advance();
                    tokens.push(new token(tokenType.DIVIDE));
                }
                else if (this.current_char == "(") {
                    this.advance();
                    tokens.push(new token(tokenType.LPAREN));
                }
                else if (this.current_char == ")") {
                    this.advance();
                    tokens.push(new token(tokenType.RPAREN));
                }
                else {
                    throw new Error(`Analysis failed, Illegal character ${this.current_char}`);
                }
            }
            return tokens;
        }
        catch (error) {
            console.log(error.name + " : " + error.message);
            return null;
        }
    }
    generateNumber() {
        let decimalPointCount = 0;
        let numberStr = this.current_char;
        let rtn;
        this.advance();
        while (this.current_char != null &&
            (this.current_char == "." || DIGITS.includes(this.current_char))) {
            if (this.current_char == ".") {
                decimalPointCount += 1;
                if (decimalPointCount > 1) {
                    break;
                }
            }
            numberStr += this.current_char;
            this.advance();
        }
        if (numberStr) {
            if (numberStr.startsWith(".")) {
                numberStr = "0" + numberStr;
            }
            if (numberStr.endsWith(".")) {
                numberStr += "0";
            }
            rtn = new token(tokenType.NUMBER, parseFloat(numberStr));
        }
        else {
            rtn = null;
        }
        return rtn;
    }
}
export { lexer };
