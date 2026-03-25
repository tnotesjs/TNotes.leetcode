int partitionDisjoint(int* nums, int numsSize) {
    int leftMax = nums[0];
    int curMax = nums[0];
    int partitionIdx = 0;

    for (int i = 1; i < numsSize; i++) {
        if (nums[i] < leftMax) {
            partitionIdx = i;
            leftMax = curMax;
        } else if (nums[i] > curMax) {
            curMax = nums[i];
        }
    }

    return partitionIdx + 1;
}
