int res;

void dfs(struct TreeNode* node, int minVal, int maxVal) {
    if (!node) return;
    int d1 = abs(node->val - minVal);
    int d2 = abs(node->val - maxVal);
    if (d1 > res) res = d1;
    if (d2 > res) res = d2;
    int newMin = node->val < minVal ? node->val : minVal;
    int newMax = node->val > maxVal ? node->val : maxVal;
    dfs(node->left, newMin, newMax);
    dfs(node->right, newMin, newMax);
}

int maxAncestorDiff(struct TreeNode* root) {
    res = 0;
    dfs(root, root->val, root->val);
    return res;
}
