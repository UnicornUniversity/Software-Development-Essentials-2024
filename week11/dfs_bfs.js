class Node {
    constructor(value, children) {
        this.value = value;
        this.children = [];
        if (children != null) {
            this.children = children;
        }
    }
}

const node10 = new Node(10);
const node9 = new Node(9);
const node8 = new Node(8);
const node7 = new Node(7);
const node6 = new Node(6, [node8]);
const node5 = new Node(5, [node7]);
const node4 = new Node(4);
const node3 = new Node(3, [node9, node10]);
const node2 = new Node(2, [node4, node5, node6]);
// root
const node1 = new Node(1, [node2, node3]);

function dfs(node) {
    console.log(node.value);

    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        dfs(child);
    }
}

// uncomment to run
// dfs(node1);

function bfs(node){
    let queue = [node];
    while(queue.length > 0){
        const firstElement = queue.shift();
        console.log(firstElement.value);
        for(let j = 0; j < firstElement.children.length; j++){
            queue.push(firstElement.children[j]);
        }
    }
}

bfs(node1);
