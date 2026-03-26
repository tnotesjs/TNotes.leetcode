long long maximumTripletValue(int* nums, int numsSize) {
    long long ans = 0, maxDiff = 0, prefixMax = 0;
    for (int i = 0; i < numsSize; i++) {
        long long x = nums[i];
        if (maxDiff * x > ans) ans = maxDiff * x;
        if (prefixMax - x > maxDiff) maxDiff = prefixMax - x;
        if (x > prefixMax) prefixMax = x;
    }
    return ans;
}
