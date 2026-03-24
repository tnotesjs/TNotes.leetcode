void dfs(int cur, int n, int* res, int* idx) {
    if (cur > n) return;
    res[(*idx)++] = cur;
    for (int i = 0; i <= 9; i++) dfs(cur * 10 + i, n, res, idx);
}

int* lexicalOrder(int n, int* returnSize) {
    int* res = (int*)malloc(sizeof(int) * n);
    *returnSize = 0;
    for (int i = 1; i <= 9; i++) dfs(i, n, res, returnSize);
    return res;
}
