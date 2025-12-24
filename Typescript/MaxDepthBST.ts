// Return the maximum depth of a binary search tree.

class TreeNodeTS {
    val: number;
    left: TreeNodeTS | null;
    right: TreeNodeTS | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function insertTS(root: TreeNodeTS | null, val: number): TreeNodeTS {
    if (root === null) return new TreeNodeTS(val);
    else if (val < root.val)
        root.left = insert(root.left, val);
    else
        root.right = insert(root.right, val);

    return root;
}

function findDepthTS(head: TreeNodeTS | null){
    if(head === null) return 0;
    return 1 + Math.max(findDepth(head.left), findDepth(head.right))
}

((): void => {
    let root: TreeNode | null = null;

    root = insert(root, 5);
    insert(root, 3);
    insert(root, 8);
    insert(root, 2);
    insert(root, 4);
    insert(root, 7);

    console.log("BST created with root value:", root!.val);
    console.log("Max Depth: ", findDepthTS(root));
})();