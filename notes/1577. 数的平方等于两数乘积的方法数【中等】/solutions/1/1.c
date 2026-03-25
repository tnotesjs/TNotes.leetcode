int numTriplets(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int res = 0;
    // type1: nums1[i]^2 = nums2[j] * nums2[k]
    for (int i = 0; i < nums1Size; i++) {
        long long target = (long long)nums1[i] * nums1[i];
        for (int j = 0; j < nums2Size; j++)
            for (int k = j + 1; k < nums2Size; k++)
                if ((long long)nums2[j] * nums2[k] == target) res++;
    }
    // type2: nums2[i]^2 = nums1[j] * nums1[k]
    for (int i = 0; i < nums2Size; i++) {
        long long target = (long long)nums2[i] * nums2[i];
        for (int j = 0; j < nums1Size; j++)
            for (int k = j + 1; k < nums1Size; k++)
                if ((long long)nums1[j] * nums1[k] == target) res++;
    }
    return res;
}
