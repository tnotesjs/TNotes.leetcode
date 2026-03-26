int minImpossibleOR(int* nums, int numsSize) {
    int mask = 0;
    for (int i = 0; i < numsSize; i++) {
        int v = nums[i];
        if (v > 0 && (v & (v - 1)) == 0) mask |= v;
    }
    int v = 1;
    while (mask & v) v <<= 1;
    return v;
}
