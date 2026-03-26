int countOps(int *nums1, int *nums2, int n, int last1, int last2) {
    int ops = 0;
    for (int i = 0; i < n - 1; i++) {
        if (nums1[i] <= last1 && nums2[i] <= last2) continue;
        if (nums1[i] <= last2 && nums2[i] <= last1) { ops++; continue; }
        return -1;
    }
    return ops;
}

int minOperations(int* nums1, int numsSize1, int* nums2, int numsSize2) {
    int n = numsSize1;
    int a = countOps(nums1, nums2, n, nums1[n - 1], nums2[n - 1]);
    int b = countOps(nums1, nums2, n, nums2[n - 1], nums1[n - 1]);
    if (b != -1) b++;
    if (a == -1 && b == -1) return -1;
    if (a == -1) return b;
    if (b == -1) return a;
    return a < b ? a : b;
}
