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

function traverseTree(node) {
    console.log(node.value);

    if (node.left != null) traverseTree(node.left);
    if (node.right != null) traverseTree(node.right);
}

traverseTree(node7);