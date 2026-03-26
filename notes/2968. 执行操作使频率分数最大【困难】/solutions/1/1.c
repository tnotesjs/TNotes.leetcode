int cmp(const void* a, const void* b) {
    return *(int*)a > *(int*)b ? 1 : -1;
}

int check(int* nums, long long* prefix, int n, int size, long long k) {
    for (int i = 0; i + size - 1 < n; i++) {
        int j = i + size - 1;
        int m = i + (size - 1) / 2;
        long long target = nums[m];
        long long leftCost = target * (m - i + 1) - (prefix[m + 1] - prefix[i]);
        long long rightCost = (prefix[j + 1] - prefix[m + 1]) - target * (j - m);
        if (leftCost + rightCost <= k) return 1;
    }
    return 0;
}

int maxFrequencyScore(int* nums, int numsSize, long long k) {
    qsort(nums, numsSize, sizeof(int), cmp);
    long long* prefix = malloc((numsSize + 1) * sizeof(long long));
    prefix[0] = 0;
    for (int i = 0; i < numsSize; i++)
        prefix[i + 1] = prefix[i] + nums[i];
    int lo = 1, hi = numsSize, ans = 1;
    while (lo <= hi) {
        int mid = (lo + hi) / 2;
        if (check(nums, prefix, numsSize, mid, k)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    free(prefix);
    return ans;
}
