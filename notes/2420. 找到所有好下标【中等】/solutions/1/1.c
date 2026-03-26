int* goodIndices(int* nums, int numsSize, int k, int* returnSize) {
    int n = numsSize;
    int* dec = (int*)malloc(n * sizeof(int));
    int* inc = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) { dec[i] = 1; inc[i] = 1; }
    for (int i = 1; i < n; i++) {
        if (nums[i] <= nums[i - 1]) dec[i] = dec[i - 1] + 1;
    }
    for (int i = n - 2; i >= 0; i--) {
        if (nums[i] <= nums[i + 1]) inc[i] = inc[i + 1] + 1;
    }
    int* result = (int*)malloc(n * sizeof(int));
    *returnSize = 0;
    for (int i = k; i < n - k; i++) {
        if (dec[i - 1] >= k && inc[i + 1] >= k) {
            result[(*returnSize)++] = i;
        }
    }
    free(dec); free(inc);
    return result;
}
