int robRange(int* nums, int lo, int hi) {
    int prev = 0, curr = 0;
    for (int i = lo; i <= hi; i++) {
        int temp = curr > prev + nums[i] ? curr : prev + nums[i];
        prev = curr;
        curr = temp;
    }
    return curr;
}

int rob(int* nums, int numsSize) {
    if (numsSize == 1) return nums[0];
    int a = robRange(nums, 0, numsSize - 2);
    int b = robRange(nums, 1, numsSize - 1);
    return a > b ? a : b;
}
