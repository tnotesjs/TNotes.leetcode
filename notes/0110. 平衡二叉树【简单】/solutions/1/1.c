/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int getHeight(struct TreeNode* node) {
    if (!node)
        return 0;
    int leftHeight = getHeight(node->left);
    int rightHeight = getHeight(node->right);
    return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
}

bool isBalanced(struct TreeNode* root) {
    if (!root)
        return true;

    int leftHeight = getHeight(root->left);
    int rightHeight = getHeight(root->right);

    return abs(leftHeight - rightHeight) <= 1 && isBalanced(root->left) &&
           isBalanced(root->right);
}
