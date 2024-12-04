function printBinaryTreeRoutines(node){
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

function printBinaryTree(root){
    console.log(root.value + printBinaryTreeRoutines(root));
}

