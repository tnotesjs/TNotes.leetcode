int sum;
void dfs(struct TreeNode* node) {
    if (!node) return;
    dfs(node->right);
    sum += node->val;
    node->val = sum;
    dfs(node->left);
}

struct TreeNode* convertBST(struct TreeNode* root) {
    sum = 0;
    dfs(root);
    return root;
}
