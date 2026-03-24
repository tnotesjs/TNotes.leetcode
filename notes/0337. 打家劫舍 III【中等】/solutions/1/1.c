int* dfs(struct TreeNode* node) {
    int* res = (int*)calloc(2, sizeof(int));
    if (!node) return res;
    int* left = dfs(node->left);
    int* right = dfs(node->right);
    int maxL = left[0] > left[1] ? left[0] : left[1];
    int maxR = right[0] > right[1] ? right[0] : right[1];
    res[0] = maxL + maxR;
    res[1] = node->val + left[0] + right[0];
    free(left); free(right);
    return res;
}

int rob(struct TreeNode* root) {
    int* res = dfs(root);
    int ans = res[0] > res[1] ? res[0] : res[1];
    free(res);
    return ans;
}
