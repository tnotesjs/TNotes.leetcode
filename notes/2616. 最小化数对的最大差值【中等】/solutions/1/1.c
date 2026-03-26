int cmp(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int minimizeMax(int *nums, int numsSize, int p) {
    if (p == 0) return 0;
    qsort(nums, numsSize, sizeof(int), cmp);
    int lo = 0, hi = nums[numsSize - 1] - nums[0];
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        int cnt = 0;
        for (int i = 1; i < numsSize; i++) {
            if (nums[i] - nums[i - 1] <= mid) {
                cnt++;
                i++;
            }
        }
        if (cnt >= p) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
