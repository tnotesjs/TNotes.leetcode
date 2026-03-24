int findNumberOfLIS(int* nums, int numsSize) {
    int* dp = (int*)malloc(sizeof(int) * numsSize);
    int* cnt = (int*)malloc(sizeof(int) * numsSize);
    int maxLen = 1;
    for (int i = 0; i < numsSize; i++) {
        dp[i] = 1; cnt[i] = 1;
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) { dp[i] = dp[j] + 1; cnt[i] = cnt[j]; }
                else if (dp[j] + 1 == dp[i]) cnt[i] += cnt[j];
            }
        }
        if (dp[i] > maxLen) maxLen = dp[i];
    }
    int res = 0;
    for (int i = 0; i < numsSize; i++)
        if (dp[i] == maxLen) res += cnt[i];
    free(dp); free(cnt);
    return res;
}
