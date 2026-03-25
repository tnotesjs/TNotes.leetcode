struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int res1530;

int* dfs1530(struct TreeNode* node, int distance, int* size) {
    if (!node) { *size = 0; return NULL; }
    if (!node->left && !node->right) {
        int* arr = (int*)malloc(sizeof(int));
        arr[0] = 1; *size = 1;
        return arr;
    }
    int ls = 0, rs = 0;
    int* left = dfs1530(node->left, distance, &ls);
    int* right = dfs1530(node->right, distance, &rs);
    for (int i = 0; i < ls; i++)
        for (int j = 0; j < rs; j++)
            if (left[i] + right[j] <= distance) res1530++;
    int cnt = 0;
    int* result = (int*)malloc((ls + rs) * sizeof(int));
    for (int i = 0; i < ls; i++)
        if (left[i] + 1 < distance) result[cnt++] = left[i] + 1;
    for (int i = 0; i < rs; i++)
        if (right[i] + 1 < distance) result[cnt++] = right[i] + 1;
    free(left); free(right);
    *size = cnt;
    return result;
}

int countPairs(struct TreeNode* root, int distance) {
    res1530 = 0;
    int size;
    int* arr = dfs1530(root, distance, &size);
    free(arr);
    return res1530;
}
