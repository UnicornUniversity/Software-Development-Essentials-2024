class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// tail
const node7 = new Node(7, null);
const node6 = new Node(6, node7);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
// head
const node1 = new Node(1, node2);

// find the middle node
let slowPointer = node1;
let fastPointer = node1;

while(slowPointer != null && fastPointer != null){
    console.log("slow = " + slowPointer.value + "; fast = " + fastPointer.value);

    if (fastPointer.next != null){
        slowPointer = slowPointer.next;
        fastPointer = (fastPointer.next).next;
    }
    else
        fastPointer = null;
}

console.log("middle = " + slowPointer.value);


