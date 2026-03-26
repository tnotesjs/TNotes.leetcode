long long subArrayRanges(int* nums, int numsSize) {
    long long res = 0;
    for (int i = 0; i < numsSize; i++) {
        int min = nums[i], max = nums[i];
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[j] < min) min = nums[j];
            if (nums[j] > max) max = nums[j];
            res += max - min;
        }
    }
    return res;
}
