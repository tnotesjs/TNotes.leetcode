bool checkArray(int *nums, int numsSize, int k) {
    int n = numsSize;
    long long *diff = (long long *)calloc(n + 1, sizeof(long long));
    long long cur = 0;
    for (int i = 0; i < n; i++) {
        cur += diff[i];
        long long val = nums[i] + cur;
        if (val < 0) { free(diff); return false; }
        if (val == 0) continue;
        if (i + k > n) { free(diff); return false; }
        cur -= val;
        diff[i + k] += val;
    }
    free(diff);
    return true;
}
