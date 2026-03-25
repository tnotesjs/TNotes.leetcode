int maxSumDivThree(int* nums, int numsSize) {
    long long dp[3] = {0, -1e18, -1e18};
    for (int k = 0; k < numsSize; k++) {
        long long tmp[3];
        for (int i = 0; i < 3; i++) tmp[i] = dp[i];
        for (int i = 0; i < 3; i++) {
            int r = (i + nums[k]) % 3;
            if (dp[i] + nums[k] > tmp[r]) tmp[r] = dp[i] + nums[k];
        }
        for (int i = 0; i < 3; i++) dp[i] = tmp[i];
    }
    return (int)dp[0];
}
