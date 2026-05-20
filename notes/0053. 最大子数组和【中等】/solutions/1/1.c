int maxSubArray(int* nums, int numsSize) {
    int bestSum = nums[0];
    int currentSum = nums[0];

    for (int i = 1; i < numsSize; i++) {
        currentSum = currentSum > 0 ? currentSum + nums[i] : nums[i];
        if (currentSum > bestSum)
            bestSum = currentSum;
    }

    return bestSum;
}
