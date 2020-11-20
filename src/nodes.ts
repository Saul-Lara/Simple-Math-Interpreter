class numberNode {
	value: number;

	constructor(value: number) {
		this.value = value;
	}
}

class addNode {
	nodeA: any;
	nodeB: any;
	constructor(nodeA, nodeB) {
		this.nodeA = nodeA;
		this.nodeB = nodeB;
	}
}

class subtractNode {
	nodeA: any;
	nodeB: any;

	constructor(nodeA, nodeB) {
		this.nodeA = nodeA;
		this.nodeB = nodeB;
	}
}

class multiplyNode {
	nodeA: any;
	nodeB: any;

	constructor(nodeA, nodeB) {
		this.nodeA = nodeA;
		this.nodeB = nodeB;
	}
}

class divideNode {
	nodeA: any;
	nodeB: any;

	constructor(nodeA, nodeB) {
		this.nodeA = nodeA;
		this.nodeB = nodeB;
	}
}

class plusNode {
	node: any;

	constructor(node: number) {
		this.node = node;
	}
}

class minusNode {
	node: any;

	constructor(node: number) {
		this.node = node;
	}
}

export {
	numberNode,
	addNode,
	subtractNode,
	multiplyNode,
	divideNode,
	plusNode,
	minusNode,
};
