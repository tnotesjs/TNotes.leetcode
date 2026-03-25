struct TreeNode* build(int* preorder, int size, int* idx, int lower, int upper) {
    if (*idx == size) return NULL;
    int val = preorder[*idx];
    if (val < lower || val > upper) return NULL;
    (*idx)++;
    struct TreeNode* node = malloc(sizeof(struct TreeNode));
    node->val = val;
    node->left = build(preorder, size, idx, lower, val);
    node->right = build(preorder, size, idx, val, upper);
    return node;
}

struct TreeNode* bstFromPreorder(int* preorder, int preorderSize) {
    int idx = 0;
    return build(preorder, preorderSize, &idx, INT_MIN, INT_MAX);
}
