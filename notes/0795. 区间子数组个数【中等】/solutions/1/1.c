int count(int* nums, int numsSize, int bound) {
    int res = 0, cur = 0;
    for (int i = 0; i < numsSize; i++) {
        cur = nums[i] <= bound ? cur + 1 : 0;
        res += cur;
    }
    return res;
}

int numSubarrayBoundedMax(int* nums, int numsSize, int left, int right) {
    return count(nums, numsSize, right) - count(nums, numsSize, left - 1);
}
