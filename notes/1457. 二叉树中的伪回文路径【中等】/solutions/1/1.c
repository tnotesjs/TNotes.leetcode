int count;
void dfs(struct TreeNode* node, int mask) {
    if (!node) return;
    mask ^= 1 << node->val;
    if (!node->left && !node->right) {
        if ((mask & (mask - 1)) == 0) count++;
        return;
    }
    dfs(node->left, mask);
    dfs(node->right, mask);
}

int pseudoPalindromicPaths(struct TreeNode* root) {
    count = 0;
    dfs(root, 0);
    return count;
}
