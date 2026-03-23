int compare(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int** g_ans;
int* g_colSizes;
int g_ansSize;
int g_path[8];
int g_pathLen;
int g_used[8];

void backtrack(int* nums, int n) {
    if (g_pathLen == n) {
        g_ans[g_ansSize] = (int*)malloc(n * sizeof(int));
        memcpy(g_ans[g_ansSize], g_path, n * sizeof(int));
        g_colSizes[g_ansSize] = n;
        g_ansSize++;
        return;
    }
    for (int i = 0; i < n; i++) {
        if (g_used[i]) continue;
        if (i > 0 && nums[i] == nums[i - 1] && !g_used[i - 1]) continue;  // 同层去重
        g_used[i] = 1;
        g_path[g_pathLen++] = nums[i];
        backtrack(nums, n);
        g_pathLen--;
        g_used[i] = 0;
    }
}

int** permuteUnique(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    qsort(nums, numsSize, sizeof(int), compare);
    g_ans = (int**)malloc(50000 * sizeof(int*));
    g_colSizes = (int*)malloc(50000 * sizeof(int));
    g_ansSize = 0;
    g_pathLen = 0;
    memset(g_used, 0, sizeof(g_used));
    backtrack(nums, numsSize);
    *returnSize = g_ansSize;
    *returnColumnSizes = g_colSizes;
    return g_ans;
}
