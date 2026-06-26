/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool isMirror(struct TreeNode* left, struct TreeNode* right) {
    if (!left && !right)
        return true;
    if (!left || !right)
        return false;
    if (left->val != right->val)
        return false;
    return isMirror(left->left, right->right) &&
           isMirror(left->right, right->left);
}

bool isSymmetric(struct TreeNode* root) {
    if (!root)
        return true;
    return isMirror(root->left, root->right);
}
