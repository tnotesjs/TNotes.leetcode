int maximumTop(int* nums, int numsSize, int k) {
    if (numsSize == 1) return k % 2 == 0 ? nums[0] : -1;
    if (k == 0) return nums[0];
    int maxVal = -1;
    if (k - 1 < numsSize) maxVal = nums[k - 1];
    int limit = k - 1 < numsSize ? k - 1 : numsSize;
    for (int i = 0; i < limit; i++) {
        if (nums[i] > maxVal) maxVal = nums[i];
    }
    return maxVal;
}
