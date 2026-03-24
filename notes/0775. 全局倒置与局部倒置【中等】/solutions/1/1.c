bool isIdealPermutation(int* nums, int numsSize) {
    for (int i = 0; i < numsSize; i++) {
        int d = nums[i] - i;
        if (d > 1 || d < -1) return false;
    }
    return true;
}
