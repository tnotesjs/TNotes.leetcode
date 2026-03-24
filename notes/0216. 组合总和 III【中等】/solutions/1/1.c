void backtrack(int start, int remain, int k, int* path, int pathLen, int** res, int* resSize, int** resColSize) {
    if (pathLen == k) {
        if (remain == 0) {
            res[*resSize] = (int*)malloc(sizeof(int) * k);
            memcpy(res[*resSize], path, sizeof(int) * k);
            (*resColSize)[*resSize] = k;
            (*resSize)++;
        }
        return;
    }
    for (int i = start; i <= 9; i++) {
        if (i > remain) break;
        path[pathLen] = i;
        backtrack(i + 1, remain - i, k, path, pathLen + 1, res, resSize, resColSize);
    }
}

int** combinationSum3(int k, int n, int* returnSize, int** returnColumnSizes) {
    int** res = (int**)malloc(sizeof(int*) * 200);
    *returnColumnSizes = (int*)malloc(sizeof(int) * 200);
    *returnSize = 0;
    int path[9];
    backtrack(1, n, k, path, 0, res, returnSize, returnColumnSizes);
    return res;
}
