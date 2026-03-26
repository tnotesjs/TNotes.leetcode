int countMaxOrSubsets(int* nums, int numsSize) {
    int maxOr = 0;
    for (int i = 0; i < numsSize; i++) maxOr |= nums[i];
    int count = 0;
    for (int mask = 1; mask < (1 << numsSize); mask++) {
        int or_ = 0;
        for (int i = 0; i < numsSize; i++) {
            if (mask & (1 << i)) or_ |= nums[i];
        }
        if (or_ == maxOr) count++;
    }
    return count;
}
