int cmp(const void* a, const void* b) {
    int x = *(int*)a, y = *(int*)b;
    return (x > y) - (x < y);
}

int maxNumOfMarkedIndices(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int n = numsSize;
    int lo = 0, hi = n / 2;
    while (lo < hi) {
        int mid = (lo + hi + 1) / 2;
        int ok = 1;
        for (int i = 0; i < mid; i++) {
            if (2LL * nums[i] > nums[n - mid + i]) { ok = 0; break; }
        }
        if (ok) lo = mid; else hi = mid - 1;
    }
    return lo * 2;
}
