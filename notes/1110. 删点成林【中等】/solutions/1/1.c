struct TreeNode** delNodes(struct TreeNode* root, int* to_delete, int to_deleteSize, int* returnSize) {
    int delSet[1001] = {0};
    for (int i = 0; i < to_deleteSize; i++) delSet[to_delete[i]] = 1;
    struct TreeNode** res = malloc(1001 * sizeof(struct TreeNode*));
    *returnSize = 0;
    struct TreeNode* dfs(struct TreeNode* node, int isRoot) {
        if (!node) return NULL;
        int deleted = delSet[node->val];
        if (isRoot && !deleted) res[(*returnSize)++] = node;
        node->left = dfs(node->left, deleted);
        node->right = dfs(node->right, deleted);
        return deleted ? NULL : node;
    }
    dfs(root, 1);
    return res;
}
