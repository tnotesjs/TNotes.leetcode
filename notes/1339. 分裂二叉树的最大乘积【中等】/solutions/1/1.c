long long sums[50001];
int cnt;

long long getSum(struct TreeNode* node) {
    if (!node) return 0;
    long long s = node->val + getSum(node->left) + getSum(node->right);
    sums[cnt++] = s;
    return s;
}

int maxProduct(struct TreeNode* root) {
    cnt = 0;
    long long total = getSum(root);
    long long ans = 0;
    for (int i = 0; i < cnt; i++) {
        long long product = sums[i] * (total - sums[i]);
        if (product > ans) ans = product;
    }
    return (int)(ans % 1000000007);
}
