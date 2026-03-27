int minimumArrayLength(int* nums, int numsSize) {
    int min = nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] < min) min = nums[i];
    }
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] % min != 0) return 1;
    }
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == min) count++;
    }
    return (count + 1) / 2;
}
