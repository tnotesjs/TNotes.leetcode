int* findDiagonalOrder(int** nums, int numsSize, int* numsColSize, int* returnSize) {
    int total = 0, maxD = 0;
    for (int i = 0; i < numsSize; i++) {
        total += numsColSize[i];
        int d = i + numsColSize[i] - 1;
        if (d > maxD) maxD = d;
    }
    // 每条对角线临时存储
    int** groups = (int**)calloc(maxD + 1, sizeof(int*));
    int* gSizes = (int*)calloc(maxD + 1, sizeof(int));
    int* gCaps = (int*)calloc(maxD + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        for (int j = 0; j < numsColSize[i]; j++) {
            int d = i + j;
            if (gSizes[d] == gCaps[d]) {
                gCaps[d] = gCaps[d] ? gCaps[d] * 2 : 4;
                groups[d] = (int*)realloc(groups[d], gCaps[d] * sizeof(int));
            }
            groups[d][gSizes[d]++] = nums[i][j];
        }
    }
    int* res = (int*)malloc(total * sizeof(int));
    int idx = 0;
    for (int d = 0; d <= maxD; d++) {
        for (int i = gSizes[d] - 1; i >= 0; i--) res[idx++] = groups[d][i];
        free(groups[d]);
    }
    free(groups); free(gSizes); free(gCaps);
    *returnSize = total;
    return res;
}
