int maxAbsoluteSum(int* nums, int numsSize) {
    int maxSum = 0, minSum = 0, curMax = 0, curMin = 0;
    for (int i = 0; i < numsSize; i++) {
        curMax = (curMax + nums[i] > nums[i]) ? curMax + nums[i] : nums[i];
        curMin = (curMin + nums[i] < nums[i]) ? curMin + nums[i] : nums[i];
        if (curMax > maxSum) maxSum = curMax;
        if (curMin < minSum) minSum = curMin;
    }
    return maxSum > -minSum ? maxSum : -minSum;
}
