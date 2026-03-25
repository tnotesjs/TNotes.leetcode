int minOperations(int* nums, int numsSize) {
    int ops = 0, maxBits = 0;
    for (int i = 0; i < numsSize; i++) {
        int v = nums[i], bits = 0;
        while (v > 0) {
            if (v & 1) ops++;
            bits++;
            v >>= 1;
        }
        if (bits > maxBits) maxBits = bits;
    }
    if (maxBits > 0) ops += maxBits - 1;
    return ops;
}
