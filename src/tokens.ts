enum tokenType {
	NUMBER = 0,
	PLUS = 1,
	MINUS = 2,
	MULTIPLY = 3,
	DIVIDE = 4,
	LPAREN = 5,
	RPAREN = 6,
}

class token {
	type: tokenType;
	value: any;

	constructor(type: tokenType, value: any = null) {
		this.type = type;
		this.value = value;
	}

	info(): string {
		let text: string =
			`${tokenType[this.type]}` + (this.value != null ? `: ${this.value}` : "");
		return text;
	}
}

export { tokenType, token };
