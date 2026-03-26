int countSubMultisets(int* nums, int numsSize, int l, int r) {
    long long MOD = 1000000007;
    int maxVal = 0;
    long long total = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > maxVal) maxVal = nums[i];
        total += nums[i];
    }
    if (total < l) return 0;
    if (r > total) r = (int)total;

    int* cnt = (int*)calloc(maxVal + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) cnt[nums[i]]++;

    int zeros = cnt[0];

    long long* dp = (long long*)calloc(r + 1, sizeof(long long));
    dp[0] = 1;

    for (int v = 1; v <= maxVal; v++) {
        if (cnt[v] == 0) continue;
        int c = cnt[v];
        long long* newDp = (long long*)calloc(r + 1, sizeof(long long));
        for (int rem = 0; rem < v; rem++) {
            long long windowSum = 0;
            int count = 0;
            for (int j = rem; j <= r; j += v) {
                windowSum = (windowSum + dp[j]) % MOD;
                count++;
                if (count > c + 1) {
                    windowSum = (windowSum - dp[j - (c + 1) * v] + MOD) % MOD;
                }
                newDp[j] = windowSum;
            }
        }
        for (int i = 0; i <= r; i++) dp[i] = newDp[i];
        free(newDp);
    }

    long long ans = 0;
    for (int i = l; i <= r; i++) {
        ans = (ans + dp[i]) % MOD;
    }
    ans = ans % MOD * ((zeros + 1) % MOD) % MOD;

    free(dp);
    free(cnt);
    return (int)ans;
}
