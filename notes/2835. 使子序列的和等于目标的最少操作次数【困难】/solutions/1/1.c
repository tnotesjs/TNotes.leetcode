int minOperations(int* nums, int numsSize, int target) {
    long long sum = 0;
    int cnt[32] = {0};
    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
        int b = 0, v = nums[i];
        while (v > 1) { v >>= 1; b++; }
        cnt[b]++;
    }
    if (sum < target) return -1;
    int ops = 0;
    for (int i = 0; i < 31; i++) {
        if ((target >> i) & 1) {
            if (cnt[i] > 0) {
                cnt[i]--;
            } else {
                int j = i + 1;
                while (cnt[j] == 0) j++;
                ops += j - i;
                cnt[j]--;
                for (int l = j - 1; l > i; l--) cnt[l]++;
            }
        }
        cnt[i + 1] += cnt[i] >> 1;
    }
    return ops;
}
