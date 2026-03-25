int numSubarraysWithSum(int* nums, int numsSize, int goal) {
    // 前缀和范围 [0, numsSize]，用数组代替哈希
    int* cnt = calloc(numsSize + 1, sizeof(int));
    cnt[0] = 1;
    int prefixSum = 0;
    int res = 0;

    for (int i = 0; i < numsSize; i++) {
        prefixSum += nums[i];
        if (prefixSum - goal >= 0) {
            res += cnt[prefixSum - goal];
        }
        cnt[prefixSum]++;
    }

    free(cnt);
    return res;
}
