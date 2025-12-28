/* Find LCA of two nodes in a binary tree.
Input: Root node root, nodes p and q Output: Node representing LCA
*/


class LCA_BST_TS {
    solution(
        root: TreeNode | null,
        p: TreeNode,
        q: TreeNode
    ): TreeNode | null {

        if (root === null || root.val === p.val || root.val === q.val) {
            return root;
        }

        const left = this.solution(root.left, p, q);
        const right = this.solution(root.right, p, q);

        if (left !== null && right !== null) return root;
        return left !== null ? left : right;
    }
}

(function main(): void {
    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);

    const searchBST = new LCA_BST_TS();

    console.log(
        "LCA(5,1):",
        searchBST.solution(root, root.left!, root.right!)!.val
    ); // 3

    console.log(
        "LCA(6,4):",
        searchBST.solution(
            root,
            root.left!.left!,
            root.left!.right!.right!
        )!.val
    ); // 5

    console.log(
        "LCA(7,8):",
        searchBST.solution(
            root,
            root.left!.right!.left!,
            root.right!.right!
        )!.val
    ); // 3

    console.log(
        "LCA(2,4):",
        searchBST.solution(
            root,
            root.left!.right!,
            root.left!.right!.right!
        )!.val
    ); // 2
})();