// Return the maximum depth of a binary search tree.

class TreeNode{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function insert(root, val){
    if(root === null) return new TreeNode(val);
    else if(val < root.val) root.left = insert(root.left, val);
    else root.right = insert(root.right, val);

    return root;
}

function findDepth(head){
    if(head === null) return 0;
    return 1 + Math.max(findDepth(head.left), findDepth(head.right))
}

(function main() {
    let root = null;

    root = insert(root, 5);
    insert(root, 3);
    insert(root, 8);
    insert(root, 2);
    insert(root, 4);
    insert(root, 7);

    console.log("BST created with root value:", root.val);
    console.log("Max Depth: ", findDepth(root));
})();