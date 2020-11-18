var tokenType;
(function (tokenType) {
    tokenType[tokenType["NUMBER"] = 0] = "NUMBER";
    tokenType[tokenType["PLUS"] = 1] = "PLUS";
    tokenType[tokenType["MINUS"] = 2] = "MINUS";
    tokenType[tokenType["MULTIPLY"] = 3] = "MULTIPLY";
    tokenType[tokenType["DIVIDE"] = 4] = "DIVIDE";
    tokenType[tokenType["LPAREN"] = 5] = "LPAREN";
    tokenType[tokenType["RPAREN"] = 6] = "RPAREN";
})(tokenType || (tokenType = {}));
class token {
    constructor(type, value = null) {
        this.type = type;
        this.value = value;
    }
    info() {
        let text = `${tokenType[this.type]}` + (this.value != null ? `: ${this.value}` : "");
        return text;
    }
}
export { tokenType, token };
