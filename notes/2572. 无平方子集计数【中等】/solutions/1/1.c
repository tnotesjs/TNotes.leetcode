int squareFreeSubsets(int* nums, int numsSize) {
    long long MOD = 1000000007;
    int primes[] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
    int pmask[31];
    memset(pmask, -1, sizeof(pmask));
    for (int v = 1; v <= 30; v++) {
        int m = 0, x = v, valid = 1;
        for (int i = 0; i < 10; i++) {
            int cnt = 0;
            while (x % primes[i] == 0) { x /= primes[i]; cnt++; }
            if (cnt > 1) { valid = 0; break; }
            if (cnt == 1) m |= (1 << i);
        }
        if (valid) pmask[v] = m;
    }
    int freq[31] = {0};
    for (int i = 0; i < numsSize; i++) freq[nums[i]]++;
    long long dp[1024] = {0};
    dp[0] = 1;
    for (int v = 2; v <= 30; v++) {
        if (freq[v] == 0 || pmask[v] == -1) continue;
        int m = pmask[v];
        for (int s = 1023; s >= 0; s--) {
            if ((s & m) == 0 && dp[s] > 0) {
                dp[s | m] = (dp[s | m] + dp[s] * freq[v]) % MOD;
            }
        }
    }
    long long ans = 0;
    for (int s = 0; s < 1024; s++) ans = (ans + dp[s]) % MOD;
    long long pow2 = 1;
    for (int i = 0; i < freq[1]; i++) pow2 = pow2 * 2 % MOD;
    ans = (ans % MOD * pow2 % MOD - 1 + MOD) % MOD;
    return (int)ans;
}
