/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int getHeightAndCheckBalance(struct TreeNode* node) {
    if (!node)
        return 0;

    int leftHeight = getHeightAndCheckBalance(node->left);
    if (leftHeight == -1)
        return -1;

    int rightHeight = getHeightAndCheckBalance(node->right);
    if (rightHeight == -1)
        return -1;

    if (abs(leftHeight - rightHeight) > 1)
        return -1;

    return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
}

bool isBalanced(struct TreeNode* root) {
    return getHeightAndCheckBalance(root) != -1;
}
