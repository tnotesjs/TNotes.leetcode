int maxNonDecreasingLength(int *nums1, int nums1Size, int *nums2, int nums2Size) {
    int n = nums1Size;
    int dp1 = 1, dp2 = 1, res = 1;
    for (int i = 1; i < n; i++) {
        int ndp1 = 1, ndp2 = 1;
        if (nums1[i] >= nums1[i - 1] && dp1 + 1 > ndp1) ndp1 = dp1 + 1;
        if (nums1[i] >= nums2[i - 1] && dp2 + 1 > ndp1) ndp1 = dp2 + 1;
        if (nums2[i] >= nums1[i - 1] && dp1 + 1 > ndp2) ndp2 = dp1 + 1;
        if (nums2[i] >= nums2[i - 1] && dp2 + 1 > ndp2) ndp2 = dp2 + 1;
        dp1 = ndp1;
        dp2 = ndp2;
        if (dp1 > res) res = dp1;
        if (dp2 > res) res = dp2;
    }
    return res;
}
