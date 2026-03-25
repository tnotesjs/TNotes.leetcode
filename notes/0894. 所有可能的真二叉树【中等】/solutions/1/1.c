struct TreeNode** allPossibleFBT(int n, int* returnSize) {
    if (n % 2 == 0) { *returnSize = 0; return NULL; }
    if (n == 1) {
        struct TreeNode** res = (struct TreeNode**)malloc(sizeof(struct TreeNode*));
        res[0] = (struct TreeNode*)calloc(1, sizeof(struct TreeNode));
        *returnSize = 1;
        return res;
    }
    int cap = 100;
    struct TreeNode** res = (struct TreeNode**)malloc(sizeof(struct TreeNode*) * cap);
    *returnSize = 0;
    for (int i = 1; i < n; i += 2) {
        int lSize, rSize;
        struct TreeNode** lefts = allPossibleFBT(i, &lSize);
        struct TreeNode** rights = allPossibleFBT(n - 1 - i, &rSize);
        for (int a = 0; a < lSize; a++) {
            for (int b = 0; b < rSize; b++) {
                if (*returnSize == cap) { cap *= 2; res = realloc(res, sizeof(struct TreeNode*) * cap); }
                struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
                node->val = 0; node->left = lefts[a]; node->right = rights[b];
                res[(*returnSize)++] = node;
            }
        }
        free(lefts); free(rights);
    }
    return res;
}
