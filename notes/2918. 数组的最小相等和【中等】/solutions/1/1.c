long long minSum(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    long long sum1 = 0, z1 = 0, sum2 = 0, z2 = 0;
    for (int i = 0; i < nums1Size; i++) { sum1 += nums1[i]; if (nums1[i] == 0) z1++; }
    for (int i = 0; i < nums2Size; i++) { sum2 += nums2[i]; if (nums2[i] == 0) z2++; }
    long long min1 = sum1 + z1, min2 = sum2 + z2;
    if (min1 < min2 && z1 == 0) return -1;
    if (min2 < min1 && z2 == 0) return -1;
    return min1 > min2 ? min1 : min2;
}
