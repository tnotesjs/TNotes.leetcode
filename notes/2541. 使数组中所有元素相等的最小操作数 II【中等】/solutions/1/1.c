long long minOperations(int* nums1, int nums1Size, int* nums2, int nums2Size, int k) {
    if (k == 0) {
        for (int i = 0; i < nums1Size; i++)
            if (nums1[i] != nums2[i]) return -1;
        return 0;
    }
    long long ops = 0, sum = 0;
    for (int i = 0; i < nums1Size; i++) {
        long long diff = (long long)nums2[i] - nums1[i];
        if (diff % k != 0) return -1;
        sum += diff;
        if (diff > 0) ops += diff / k;
    }
    return sum == 0 ? ops : -1;
}
