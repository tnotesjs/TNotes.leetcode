int minimizeArrayValue(int* nums, int numsSize) {
    long long ans = 0, prefixSum = 0;
    for (int i = 0; i < numsSize; i++) {
        prefixSum += nums[i];
        long long avg = (prefixSum + i) / (i + 1);
        if (avg > ans) ans = avg;
    }
    return (int)ans;
}
