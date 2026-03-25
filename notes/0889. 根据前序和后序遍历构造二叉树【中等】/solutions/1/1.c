struct TreeNode* build(int* pre, int ps, int pe, int* post, int os, int oe) {
    if (ps > pe) return NULL;
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = pre[ps]; root->left = NULL; root->right = NULL;
    if (ps == pe) return root;
    int leftVal = pre[ps + 1], leftSize = 0;
    for (int i = os; i <= oe; i++) { if (post[i] == leftVal) { leftSize = i - os + 1; break; } }
    root->left = build(pre, ps + 1, ps + leftSize, post, os, os + leftSize - 1);
    root->right = build(pre, ps + leftSize + 1, pe, post, os + leftSize, oe - 1);
    return root;
}

struct TreeNode* constructFromPrePost(int* preorder, int preorderSize, int* postorder, int postorderSize) {
    return build(preorder, 0, preorderSize - 1, postorder, 0, postorderSize - 1);
}
