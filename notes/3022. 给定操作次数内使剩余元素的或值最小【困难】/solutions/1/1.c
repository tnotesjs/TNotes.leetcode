int minOrAfterOperations(int* nums, int numsSize, int k) {
    int ans = 0;
    for (int bit = 29; bit >= 0; bit--) {
        int target = ans | ((1 << bit) - 1);
        int ops = 0;
        int cur = ~0;
        for (int i = 0; i < numsSize; i++) {
            cur &= nums[i];
            if ((cur & ~target) == 0) {
                ops++;
                cur = ~0;
            }
        }
        int needed = numsSize - ops;
        if (needed > k) {
            ans |= (1 << bit);
        }
    }
    return ans;
}
