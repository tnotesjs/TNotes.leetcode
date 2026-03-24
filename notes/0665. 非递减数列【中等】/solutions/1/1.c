bool checkPossibility(int* nums, int numsSize) {
    int count = 0;
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] < nums[i - 1]) {
            count++;
            if (count > 1) return false;
            if (i >= 2 && nums[i] < nums[i - 2]) nums[i] = nums[i - 1];
        }
    }
    return true;
}
