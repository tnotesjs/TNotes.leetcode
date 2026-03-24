/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int dfs(struct TreeNode* node, int num) {
    if (!node) return 0;
    num = num * 10 + node->val;
    if (!node->left && !node->right) return num;
    return dfs(node->left, num) + dfs(node->right, num);
}

int sumNumbers(struct TreeNode* root) {
    return dfs(root, 0);
}
