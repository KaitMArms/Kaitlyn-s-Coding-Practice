// Return the maximum depth of a binary search tree.
#include <iostream>
using namespace std;

struct TreeNode{
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr){}
};

TreeNode* insert(TreeNode* root, int val){
    if(root == nullptr) {return new TreeNode(val);}
    else if(val < root->val) {root->left = insert(root->left, val);}
    else {root->right = insert(root->right, val);}

    return root;
}

int findDepth(TreeNode* root){
    if(root == nullptr) return 0;
    return 1 + min(findDepth(root->left), findDepth(root->right));
}

int main(){
    TreeNode* root = nullptr;
    root = insert(root, 5);
    insert(root, 3);
    insert(root, 8);
    insert(root, 2);
    insert(root, 4);
    insert(root, 7);
    cout << "BST created with root value: " << root->val << endl;
}