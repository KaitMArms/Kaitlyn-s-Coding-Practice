/* Find LCA of two nodes in a binary tree.
Input: Root node root, nodes p and q Output: Node representing LCA
*/

class TreeNode {
    int val;
    TreeNode left, right;

    TreeNode(int v) {
        val = v;
        left = right = null;
    }
}

public class LCA_BST {
    static TreeNode LCA(TreeNode root, TreeNode p, TreeNode q){
        if(root == null || root.val == p.val || root.val == q.val) {return root;}
        else{
            TreeNode left = LCA(root.left, p, q);
            TreeNode right = LCA(root.right, p, q);

            if(left != null && right != null) {return root;}
            else if(right != null) {return right;}
            else {return left;}
        }
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(5);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(6);
        root.left.right = new TreeNode(2);
        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(8);
        root.left.right.left = new TreeNode(7);
        root.left.right.right = new TreeNode(4);

        System.out.println("LCA(5,1): " + LCA(root, root.left, root.right).val); // 3
        System.out.println("LCA(6,4): " + LCA(root, root.left.left, root.left.right.right).val); // 5
        System.out.println("LCA(7,8): " + LCA(root, root.left.right.left, root.right.right).val); // 3
        System.out.println("LCA(2,4): " + LCA(root, root.left.right, root.left.right.right).val); // 2
    }
}
