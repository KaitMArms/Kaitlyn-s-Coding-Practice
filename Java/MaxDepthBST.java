// Return the maximum depth of a binary search tree.
class TreeNode{
    int val;
    TreeNode left, right;
    TreeNode(int val){
        this.val = val;
        left = right = null;
    }
}

class BST{
    TreeNode insert(TreeNode root, int val) {
        if(root == null) {return new TreeNode(val);}
        else if(val < root.val) {root.left = insert(root.left, val);}
        else {root.right = insert(root.right, val);}
        return root;
    }

    int findDepth(TreeNode head){
        if(head == null) return 0;
        return 1 + Math.max(findDepth(head.left), findDepth(head.right));
    }
}

class MaxDepthBST {
    public static void main(String[] args) {
        BST bst = new BST();
        TreeNode root = null;
        root = bst.insert(root, 5);
        bst.insert(root, 3);
        bst.insert(root, 8);
        bst.insert(root, 2);
        bst.insert(root, 4);
        bst.insert(root, 7);
        System.out.println("BST created with root value: " + root.val);
        System.out.println("Max Depth: " + bst.findDepth(root));
    }
}
