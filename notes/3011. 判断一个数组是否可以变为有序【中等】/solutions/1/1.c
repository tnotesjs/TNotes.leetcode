int bitCount(int n) {
    int c = 0;
    while (n) { c++; n &= n - 1; }
    return c;
}

bool canSortArray(int* nums, int numsSize) {
    int prevMax = 0, curMin = nums[0], curMax = nums[0];
    int curBits = bitCount(nums[0]);

    for (int i = 1; i < numsSize; i++) {
        int bits = bitCount(nums[i]);
        if (bits == curBits) {
            if (nums[i] < curMin) curMin = nums[i];
            if (nums[i] > curMax) curMax = nums[i];
        } else {
            if (prevMax > curMin) return false;
            prevMax = curMax;
            curMin = curMax = nums[i];
            curBits = bits;
        }
    }

    return prevMax <= curMin;
}
