import { parser } from "./parser.js";
import { numberValue } from "./values.js";

class interpreter {
	constructor() {}

	visit(node: any): any {
		let nodeName = node.constructor.name;
		//console.log(nodeName);

		if (nodeName == "addNode") {
			return new numberValue(
				this.visit(node.nodeA).value + this.visit(node.nodeB).value
			);
		} else if (nodeName == "subtractNode") {
			return new numberValue(
				this.visit(node.nodeA).value - this.visit(node.nodeB).value
			);
		} else if (nodeName == "multiplyNode") {
			return new numberValue(
				this.visit(node.nodeA).value * this.visit(node.nodeB).value
			);
		} else if (nodeName == "divideNode") {
			try {
				let value = this.divideIfNotZero(
					this.visit(node.nodeA).value,
					this.visit(node.nodeB).value
				);
				return new numberValue(value);
			} catch (error) {
				console.log(error.name + " : " + error.message);
				return null;
			}
		} else if (nodeName == "plusNode") {
			return this.visit(node.node);
		} else if (nodeName == "minusNode") {
			return new numberValue(-this.visit(node.node).value);
		} else if (nodeName == "numberNode") {
			return new numberValue(node.value);
		}
	}

	divideIfNotZero(numerator: any, denominator: any) {
		if (denominator === 0 || isNaN(denominator)) {
			throw new Error(`Runtime math error, Divide by zero.`);
		} else {
			return numerator / denominator;
		}
	}
}

export { interpreter };
