/* Find LCA of two nodes in a binary tree.
Input: Root node root, nodes p and q Output: Node representing LCA
*/
#include <iostream>
using namespace std;


struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

TreeNode* LCA(TreeNode* root, TreeNode* p, TreeNode* q){

    // Check if at LCA, if not continue down BST
    if(root == nullptr || root->val == p->val || root->val == q->val) {return root;}
    else{
        TreeNode* left = LCA(root->left, p, q);
        TreeNode* right = LCA(root->right, p, q);

        if(left != nullptr && right != nullptr) {return root;}
        else if(right != nullptr) {return right;}
        else{return left;}
    }
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(5);
    root->right = new TreeNode(1);
    root->left->left = new TreeNode(6);
    root->left->right = new TreeNode(2);
    root->right->left = new TreeNode(0);
    root->right->right = new TreeNode(8);
    root->left->right->left = new TreeNode(7);
    root->left->right->right = new TreeNode(4);

    cout << "LCA(5,1): " << LCA(root, root->left, root->right)->val << endl; // 3
    cout << "LCA(6,4): " << LCA(root, root->left->left, root->left->right->right)->val << endl; // 5
    cout << "LCA(7,8): " << LCA(root, root->left->right->left, root->right->right)->val << endl; // 3
    cout << "LCA(2,4): " << LCA(root, root->left->right, root->left->right->right)->val << endl; // 2

    return 0;
}
