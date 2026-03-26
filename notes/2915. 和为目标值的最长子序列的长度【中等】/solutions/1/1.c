int lengthOfLongestSubsequence(int* nums, int numsSize, int target) {
    int* dp = (int*)malloc((target + 1) * sizeof(int));
    for (int i = 0; i <= target; i++) dp[i] = -1;
    dp[0] = 0;
    for (int i = 0; i < numsSize; i++) {
        for (int j = target; j >= nums[i]; j--) {
            if (dp[j - nums[i]] != -1) {
                int val = dp[j - nums[i]] + 1;
                if (val > dp[j]) dp[j] = val;
            }
        }
    }
    int res = dp[target];
    free(dp);
    return res;
}
