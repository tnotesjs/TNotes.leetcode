long long maximumOr(int* nums, int numsSize, int k) {
    int n = numsSize;
    long long* suffix = (long long*)calloc(n + 1, sizeof(long long));
    for (int i = n - 1; i >= 0; i--) suffix[i] = suffix[i + 1] | nums[i];
    long long ans = 0, prefix = 0;
    for (int i = 0; i < n; i++) {
        long long val = prefix | ((long long)nums[i] << k) | suffix[i + 1];
        if (val > ans) ans = val;
        prefix |= nums[i];
    }
    free(suffix);
    return ans;
}
