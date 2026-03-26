int minSwaps(int* nums, int numsSize) {
    int total = 0;
    for (int i = 0; i < numsSize; i++) total += nums[i];
    if (total == 0) return 0;
    int ones = 0;
    for (int i = 0; i < total; i++) ones += nums[i];
    int maxOnes = ones;
    for (int i = total; i < numsSize + total; i++) {
        ones += nums[i % numsSize];
        ones -= nums[(i - total) % numsSize];
        if (ones > maxOnes) maxOnes = ones;
    }
    return total - maxOnes;
}
