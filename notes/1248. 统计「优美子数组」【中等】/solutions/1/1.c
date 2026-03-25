int numberOfSubarrays(int* nums, int numsSize, int k) {
    int* cnt = calloc(numsSize + 1, sizeof(int));
    cnt[0] = 1;
    int oddCount = 0, ans = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] % 2 == 1) oddCount++;
        if (oddCount >= k) ans += cnt[oddCount - k];
        cnt[oddCount]++;
    }
    free(cnt);
    return ans;
}
