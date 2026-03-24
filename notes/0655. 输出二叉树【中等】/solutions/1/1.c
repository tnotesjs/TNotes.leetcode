int getHeight(struct TreeNode* node) {
    if (!node) return 0;
    int l = getHeight(node->left), r = getHeight(node->right);
    return 1 + (l > r ? l : r);
}

void fill(struct TreeNode* node, char*** res, int r, int c, int h) {
    if (!node) return;
    sprintf(res[r][c], "%d", node->val);
    int offset = 1 << (h - r - 2);
    fill(node->left, res, r + 1, c - offset, h);
    fill(node->right, res, r + 1, c + offset, h);
}

char*** printTree(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    int h = getHeight(root);
    int n = (1 << h) - 1;
    char*** res = (char***)malloc(sizeof(char**) * h);
    *returnColumnSizes = (int*)malloc(sizeof(int) * h);
    for (int i = 0; i < h; i++) {
        res[i] = (char**)malloc(sizeof(char*) * n);
        (*returnColumnSizes)[i] = n;
        for (int j = 0; j < n; j++) {
            res[i][j] = (char*)calloc(12, 1);
        }
    }
    fill(root, res, 0, (n - 1) / 2, h);
    *returnSize = h;
    return res;
}
