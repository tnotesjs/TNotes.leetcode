int kthSmallest(struct TreeNode* root, int k) {
    struct TreeNode* stack[10000];
    int top = 0;
    struct TreeNode* node = root;
    while (node || top > 0) {
        while (node) {
            stack[top++] = node;
            node = node->left;
        }
        node = stack[--top];
        if (--k == 0) return node->val;
        node = node->right;
    }
    return -1;
}
