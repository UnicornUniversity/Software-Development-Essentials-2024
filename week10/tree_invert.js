function printBinaryTreeRoutines(node) {
    if (node == null) return "";
    const left = node.left;
    const right = node.right;
    let toPrint = "";
    if (left != null) toPrint += left.value;
    if (right != null) toPrint += right.value;
    toPrint += printBinaryTreeRoutines(left);
    toPrint += printBinaryTreeRoutines(right);
    return toPrint;
}

function printBinaryTree(root) {
    console.log(root.value + printBinaryTreeRoutines(root));
}

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// leafs
const node1 = new Node(1, null, null);
const node2 = new Node(2, null, null);
const node3 = new Node(3, null, null);
const node4 = new Node(4, null, null);

const node5 = new Node(5, node1, node2);
const node6 = new Node(6, node3, node4);

// root
const node7 = new Node(7, node5, node6);

function invertTree(node) {
    if (node == null) return null;

    const newLeftNode = invertTree(node.right);
    const newRightNode = invertTree(node.left);

    node.right = newRightNode;
    node.left = newLeftNode;

    return node;
}

console.log("before:");
printBinaryTree(node7);

const rootOfInvertedTree = invertTree(node7);

console.log("after:");
printBinaryTree(rootOfInvertedTree);