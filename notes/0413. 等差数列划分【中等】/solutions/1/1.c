int numberOfArithmeticSlices(int* nums, int numsSize) {
    int res = 0, cur = 0;
    for (int i = 2; i < numsSize; i++) {
        if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
            cur++;
            res += cur;
        } else {
            cur = 0;
        }
    }
    return res;
}
