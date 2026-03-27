int minOperations(int* nums, int numsSize, int k) {
    int xorVal = 0;
    for (int i = 0; i < numsSize; i++) xorVal ^= nums[i];
    xorVal ^= k;
    int cnt = 0;
    while (xorVal) {
        cnt += xorVal & 1;
        xorVal >>= 1;
    }
    return cnt;
}
