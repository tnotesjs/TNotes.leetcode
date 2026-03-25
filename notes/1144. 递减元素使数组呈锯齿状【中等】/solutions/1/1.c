int movesToMakeZigzag(int* nums, int numsSize) {
    int res[2] = {0, 0};
    for (int i = 0; i < numsSize; i++) {
        int left = i > 0 ? nums[i - 1] : INT_MAX;
        int right = i < numsSize - 1 ? nums[i + 1] : INT_MAX;
        int minN = left < right ? left : right;
        int diff = nums[i] - minN + 1;
        if (diff > 0) res[i % 2] += diff;
    }
    return res[0] < res[1] ? res[0] : res[1];
}
