int maxSubarrays(int* nums, int numsSize) {
    int cnt = 0, cur = -1;
    for (int i = 0; i < numsSize; i++) {
        cur &= nums[i];
        if (cur == 0) {
            cnt++;
            cur = -1;
        }
    }
    return cnt > 1 ? cnt : 1;
}
