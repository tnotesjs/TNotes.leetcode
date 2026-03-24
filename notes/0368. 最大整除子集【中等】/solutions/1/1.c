int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int* largestDivisibleSubset(int* nums, int numsSize, int* returnSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int* dp = (int*)malloc(sizeof(int) * numsSize);
    int* parent = (int*)malloc(sizeof(int) * numsSize);
    for (int i = 0; i < numsSize; i++) { dp[i] = 1; parent[i] = -1; }
    int maxIdx = 0;
    for (int i = 1; i < numsSize; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] % nums[j] == 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
        if (dp[i] > dp[maxIdx]) maxIdx = i;
    }
    *returnSize = dp[maxIdx];
    int* res = (int*)malloc(sizeof(int) * (*returnSize));
    int idx = *returnSize - 1;
    for (int i = maxIdx; i != -1; i = parent[i]) res[idx--] = nums[i];
    free(dp); free(parent);
    return res;
}
