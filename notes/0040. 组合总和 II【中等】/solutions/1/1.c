int compare(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int** g_ans;
int* g_colSizes;
int g_ansSize;
int g_path[40];
int g_pathLen;

void backtrack(int* candidates, int candidatesSize, int start, int remain) {
    if (remain == 0) {
        g_ans[g_ansSize] = (int*)malloc(g_pathLen * sizeof(int));
        memcpy(g_ans[g_ansSize], g_path, g_pathLen * sizeof(int));
        g_colSizes[g_ansSize] = g_pathLen;
        g_ansSize++;
        return;
    }
    for (int i = start; i < candidatesSize; i++) {
        if (candidates[i] > remain) break;  // 剪枝
        if (i > start && candidates[i] == candidates[i - 1]) continue;  // 跳过同层重复
        g_path[g_pathLen++] = candidates[i];
        backtrack(candidates, candidatesSize, i + 1, remain - candidates[i]);
        g_pathLen--;
    }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** combinationSum2(int* candidates, int candidatesSize, int target, int* returnSize, int** returnColumnSizes) {
    qsort(candidates, candidatesSize, sizeof(int), compare);
    g_ans = (int**)malloc(2000 * sizeof(int*));
    g_colSizes = (int*)malloc(2000 * sizeof(int));
    g_ansSize = 0;
    g_pathLen = 0;
    backtrack(candidates, candidatesSize, 0, target);
    *returnSize = g_ansSize;
    *returnColumnSizes = g_colSizes;
    return g_ans;
}
