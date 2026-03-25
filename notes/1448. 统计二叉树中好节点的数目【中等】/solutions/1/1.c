int count;
void dfs(struct TreeNode* node, int maxVal) {
    if (!node) return;
    if (node->val >= maxVal) count++;
    int newMax = node->val > maxVal ? node->val : maxVal;
    dfs(node->left, newMax);
    dfs(node->right, newMax);
}

int goodNodes(struct TreeNode* root) {
    count = 0;
    dfs(root, -100000);
    return count;
}
