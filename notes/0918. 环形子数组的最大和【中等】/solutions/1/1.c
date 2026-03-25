int maxSubarraySumCircular(int* nums, int numsSize) {
    int totalSum = 0;
    int maxSum = nums[0], curMax = 0;
    int minSum = nums[0], curMin = 0;

    for (int i = 0; i < numsSize; i++) {
        totalSum += nums[i];
        curMax = curMax + nums[i] > nums[i] ? curMax + nums[i] : nums[i];
        if (curMax > maxSum) maxSum = curMax;
        curMin = curMin + nums[i] < nums[i] ? curMin + nums[i] : nums[i];
        if (curMin < minSum) minSum = curMin;
    }

    return maxSum > 0 ? (maxSum > totalSum - minSum ? maxSum : totalSum - minSum) : maxSum;
}
