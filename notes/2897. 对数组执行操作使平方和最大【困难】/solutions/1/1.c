int maxSum(int* nums, int numsSize, int k) {
    long long MOD = 1000000007;
    int cnt[30] = {0};
    for (int i = 0; i < numsSize; i++) {
        for (int j = 0; j < 30; j++) {
            if (nums[i] & (1 << j)) cnt[j]++;
        }
    }
    long long ans = 0;
    for (int i = 0; i < k; i++) {
        long long val = 0;
        for (int j = 0; j < 30; j++) {
            if (cnt[j] > i) val += (1 << j);
        }
        ans = (ans + val % MOD * (val % MOD)) % MOD;
    }
    return (int)ans;
}
