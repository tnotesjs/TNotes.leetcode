int cmp2333(const void* a, const void* b) {
    return *(int*)b - *(int*)a;
}

long long minSumSquareDiff(int* nums1, int nums1Size, int* nums2, int nums2Size, int k1, int k2) {
    int n = nums1Size;
    int* diff = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        diff[i] = abs(nums1[i] - nums2[i]);
    }
    long long k = (long long)k1 + k2;
    qsort(diff, n, sizeof(int), cmp2333);
    // 二分查找目标水平线
    int lo = 0, hi = diff[0];
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        long long need = 0;
        for (int i = 0; i < n; i++) {
            if (diff[i] > mid) need += diff[i] - mid;
        }
        if (need <= k) hi = mid;
        else lo = mid + 1;
    }
    int target = lo;
    long long remaining = k;
    for (int i = 0; i < n; i++) {
        if (diff[i] > target) {
            remaining -= diff[i] - target;
            diff[i] = target;
        }
    }
    for (int i = 0; i < n && remaining > 0; i++) {
        if (diff[i] == target && target > 0) {
            diff[i]--;
            remaining--;
        }
    }
    long long res = 0;
    for (int i = 0; i < n; i++) res += (long long)diff[i] * diff[i];
    free(diff);
    return res;
}
