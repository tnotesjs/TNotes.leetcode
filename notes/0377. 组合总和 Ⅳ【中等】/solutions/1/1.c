int combinationSum4(int* nums, int numsSize, int target) {
    unsigned int* dp = (unsigned int*)calloc(target + 1, sizeof(unsigned int));
    dp[0] = 1;
    for (int i = 1; i <= target; i++) {
        for (int j = 0; j < numsSize; j++) {
            if (i >= nums[j]) dp[i] += dp[i - nums[j]];
        }
    }
    int res = (int)dp[target];
    free(dp);
    return res;
}
