struct TreeNode* dfsHelper(struct TreeNode* node, int* depth) {
    if (!node) { *depth = 0; return NULL; }
    int ld, rd;
    struct TreeNode* left = dfsHelper(node->left, &ld);
    struct TreeNode* right = dfsHelper(node->right, &rd);
    if (ld > rd) { *depth = ld + 1; return left; }
    if (rd > ld) { *depth = rd + 1; return right; }
    *depth = ld + 1;
    return node;
}

struct TreeNode* subtreeWithAllDeepest(struct TreeNode* root) {
    int d;
    return dfsHelper(root, &d);
}
