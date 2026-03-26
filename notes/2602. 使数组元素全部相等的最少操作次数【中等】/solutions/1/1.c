int cmp(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int bisect(int *nums, int n, int target) {
    int lo = 0, hi = n;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (nums[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

long long *minOperations(int *nums, int numsSize, int *queries, int queriesSize, int *returnSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    long long *pre = calloc(numsSize + 1, sizeof(long long));
    for (int i = 0; i < numsSize; i++) pre[i + 1] = pre[i] + nums[i];
    long long *ans = malloc(queriesSize * sizeof(long long));
    *returnSize = queriesSize;
    for (int i = 0; i < queriesSize; i++) {
        long long q = queries[i];
        int j = bisect(nums, numsSize, (int)q);
        long long left = q * j - pre[j];
        long long right = pre[numsSize] - pre[j] - q * (numsSize - j);
        ans[i] = left + right;
    }
    free(pre);
    return ans;
}
