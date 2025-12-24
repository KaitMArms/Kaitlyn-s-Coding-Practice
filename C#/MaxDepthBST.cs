// Return the maximum depth of a binary search tree.
using System;
using System.Xml;

class TreeNode
{
    public int val;
    public TreeNode? left;
    public TreeNode? right;
    public TreeNode(int val)
    {
        this.val = val;
        left = right = null;
    }
}

class BST
{
    public TreeNode Insert(TreeNode? root, int val)
    {
        if(root == null) return new TreeNode(val);
        else if(val < root.val) root.left = Insert(root.left, val);
        else root.right = Insert(root.right, val);

        return root;
    }
    
    public static int findDepth(TreeNode? head)
    {
        if(head == null) return 0;
        return 1 + Math.Max(findDepth(head?.left), findDepth(head?.right));
    }
}

class MaxDepthBSTProblem
{
    public static void Run()
    {
        BST bst = new BST();
        TreeNode? root = null;
        root = bst.Insert(root, 5);
        bst.Insert(root, 3);
        bst.Insert(root, 8);
        bst.Insert(root, 2);
        bst.Insert(root, 4);
        bst.Insert(root, 7);
        Console.WriteLine("BST created with root value: " + root!.val);
        Console.WriteLine($"Max Depth: {BST.findDepth(root)}");
    }
}