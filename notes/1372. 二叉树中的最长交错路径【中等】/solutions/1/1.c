int ans;

void dfs(struct TreeNode* node, int* left, int* right) {
    if (!node) { *left = -1; *right = -1; return; }
    int ll, lr, rl, rr;
    dfs(node->left, &ll, &lr);
    dfs(node->right, &rl, &rr);
    *left = lr + 1;
    *right = rl + 1;
    if (*left > ans) ans = *left;
    if (*right > ans) ans = *right;
}

int longestZigZag(struct TreeNode* root) {
    ans = 0;
    int l, r;
    dfs(root, &l, &r);
    return ans;
}
