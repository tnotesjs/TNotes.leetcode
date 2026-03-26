/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getAverages(int* nums, int numsSize, int k, int* returnSize) {
    *returnSize = numsSize;
    int* ans = (int*)malloc(numsSize * sizeof(int));
    memset(ans, -1, numsSize * sizeof(int));
    int window = 2 * k + 1;
    if (window > numsSize) return ans;
    long long sum = 0;
    for (int i = 0; i < window; i++) sum += nums[i];
    ans[k] = (int)(sum / window);
    for (int i = k + 1; i < numsSize - k; i++) {
        sum += nums[i + k] - nums[i - k - 1];
        ans[i] = (int)(sum / window);
    }
    return ans;
}
