int totalHammingDistance(int* nums, int numsSize) {
    int res = 0;
    for (int bit = 0; bit < 30; bit++) {
        int ones = 0;
        for (int i = 0; i < numsSize; i++)
            if ((nums[i] >> bit) & 1) ones++;
        res += ones * (numsSize - ones);
    }
    return res;
}
