int **findMatrix(int *nums, int numsSize, int *returnSize, int **returnColumnSizes) {
    int *cnt = calloc(numsSize + 1, sizeof(int));
    int maxRow = 0;
    for (int i = 0; i < numsSize; i++) {
        cnt[nums[i]]++;
        if (cnt[nums[i]] > maxRow) maxRow = cnt[nums[i]];
    }
    int **ans = malloc(maxRow * sizeof(int *));
    *returnColumnSizes = calloc(maxRow, sizeof(int));
    for (int i = 0; i < maxRow; i++) ans[i] = malloc(numsSize * sizeof(int));
    memset(cnt, 0, (numsSize + 1) * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        int row = cnt[nums[i]];
        ans[row][(*returnColumnSizes)[row]++] = nums[i];
        cnt[nums[i]]++;
    }
    *returnSize = maxRow;
    free(cnt);
    return ans;
}
