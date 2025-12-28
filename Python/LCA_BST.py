# Find LCA of two nodes in a binary tree.
# Input: Root node root, nodes p and q Output: Node representing LCA

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def LCA(root, p, q):
    if root is None or root == p or root == q:
        return root
    
    left = LCA(root.left, p, q)
    right = LCA(root.right, p, q)

    if left and right:
        return root
    return left if left else right

def main():
    root = TreeNode(3)
    root.left = TreeNode(5)
    root.right = TreeNode(1)
    root.left.left = TreeNode(6)
    root.left.right = TreeNode(2)
    root.right.left = TreeNode(0)
    root.right.right = TreeNode(8)
    root.left.right.left = TreeNode(7)
    root.left.right.right = TreeNode(4)

    print("LCA(5,1):", LCA(root, root.left, root.right).val)        # 3
    print("LCA(6,4):", LCA(root, root.left.left, root.left.right.right).val)  # 5
    print("LCA(7,8):", LCA(root, root.left.right.left, root.right.right).val) # 3
    print("LCA(2,4):", LCA(root, root.left.right, root.left.right.right).val) # 2

if __name__ == "__main__":
    main()
