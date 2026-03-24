/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool validate(struct TreeNode* root, long lo, long hi) {
    if (!root) return true;
    if (root->val <= lo || root->val >= hi) return false;
    return validate(root->left, lo, root->val) &&
           validate(root->right, root->val, hi);
}

bool isValidBST(struct TreeNode* root) {
    return validate(root, LONG_MIN, LONG_MAX);
}
