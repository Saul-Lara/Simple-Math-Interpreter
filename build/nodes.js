class numberNode {
    constructor(value) {
        this.value = value;
    }
}
class addNode {
    constructor(nodeA, nodeB) {
        this.nodeA = nodeA;
        this.nodeB = nodeB;
    }
}
class subtractNode {
    constructor(nodeA, nodeB) {
        this.nodeA = nodeA;
        this.nodeB = nodeB;
    }
}
class multiplyNode {
    constructor(nodeA, nodeB) {
        this.nodeA = nodeA;
        this.nodeB = nodeB;
    }
}
class divideNode {
    constructor(nodeA, nodeB) {
        this.nodeA = nodeA;
        this.nodeB = nodeB;
    }
}
class plusNode {
    constructor(node) {
        this.node = node;
    }
}
class minusNode {
    constructor(node) {
        this.node = node;
    }
}
export { numberNode, addNode, subtractNode, multiplyNode, divideNode, plusNode, minusNode, };
