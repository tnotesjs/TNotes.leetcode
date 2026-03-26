#define MOD 1000000007LL

int countPartitions(int* nums, int numsSize, int k) {
    long long total = 0;
    for (int i = 0; i < numsSize; i++) total += nums[i];
    if (total < 2LL * k) return 0;

    long long *dp = (long long *)calloc(k, sizeof(long long));
    dp[0] = 1;
    for (int i = 0; i < numsSize; i++) {
        for (int j = k - 1; j >= nums[i] && j >= 0; j--) {
            dp[j] = (dp[j] + dp[j - nums[i]]) % MOD;
        }
    }

    long long bad = 0;
    for (int j = 0; j < k; j++) bad = (bad + dp[j]) % MOD;
    bad = bad * 2 % MOD;

    long long totalP = 1;
    for (int i = 0; i < numsSize; i++) totalP = totalP * 2 % MOD;

    free(dp);
    return (int)((totalP - bad + MOD) % MOD);
}
