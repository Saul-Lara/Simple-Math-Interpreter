import { numberNode, addNode, subtractNode, multiplyNode, divideNode, plusNode, minusNode, } from "./nodes.js";
import { tokenType } from "./tokens.js";
class parser {
    constructor(tokens) {
        this.tokens = tokens[Symbol.iterator]();
        this.advance();
    }
    raiseError() {
        throw new Error(`Invalid syntax`);
    }
    advance() {
        this.currentToken = this.tokens.next();
        if (this.currentToken.done) {
            this.currentToken = null;
        }
    }
    parse() {
        if (this.currentToken == null) {
            return null;
        }
        let result = this.expr();
        if (this.currentToken != null) {
            this.raiseError();
        }
        return result;
    }
    expr() {
        let result = this.term();
        while (this.currentToken != null &&
            [tokenType.PLUS, tokenType.MINUS].includes(this.currentToken.value.type)) {
            if (this.currentToken.value.type == tokenType.PLUS) {
                this.advance();
                result = new addNode(result, this.term());
            }
            else if (this.currentToken.value.type == tokenType.MINUS) {
                this.advance();
                result = new subtractNode(result, this.term());
            }
        }
        return result;
    }
    term() {
        let result = this.factor();
        while (this.currentToken != null &&
            [tokenType.MULTIPLY, tokenType.DIVIDE].includes(this.currentToken.value.type)) {
            if (this.currentToken.value.type == tokenType.MULTIPLY) {
                this.advance();
                result = new multiplyNode(result, this.factor());
            }
            else if (this.currentToken.value.type == tokenType.DIVIDE) {
                this.advance();
                result = new divideNode(result, this.factor());
            }
        }
        return result;
    }
    factor() {
        if (this.currentToken == null) {
            this.raiseError();
        }
        let token = this.currentToken.value;
        if (token.type == tokenType.LPAREN) {
            this.advance();
            let result = this.expr();
            if (this.currentToken.value.type != tokenType.RPAREN) {
                this.raiseError();
            }
            this.advance();
            return result;
        }
        else if (token.type == tokenType.NUMBER) {
            this.advance();
            return new numberNode(token.value);
        }
        else if (token.type == tokenType.PLUS) {
            this.advance();
            return new plusNode(this.factor());
        }
        else if (token.type == tokenType.MINUS) {
            this.advance();
            return new minusNode(this.factor());
        }
        this.raiseError();
    }
}
export { parser };
