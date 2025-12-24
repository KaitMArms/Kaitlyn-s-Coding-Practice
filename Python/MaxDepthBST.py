# Return the maximum depth of a binary search tree.

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def insert(root, val):
    if root is None:
        return TreeNode(val)
    elif val < root.val:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)

    return root

def findDepth(head):
    if head is None:
        return 0
    return 1 + max(findDepth(head.left), findDepth(head.right))

def main():
    root = None

    root = insert(root, 5)
    insert(root, 3)
    insert(root, 8)
    insert(root, 2)
    insert(root, 4)
    insert(root, 7)

    print("BST created with root value:", root.val)
    print("Max Depth: ", findDepth(root))