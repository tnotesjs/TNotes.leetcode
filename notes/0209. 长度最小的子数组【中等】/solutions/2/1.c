int minSubArrayLen(int target, int* nums, int numsSize) {
    long long* prefix = (long long*)malloc((numsSize + 1) * sizeof(long long));
    prefix[0] = 0;
    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int ans = numsSize + 1;
    for (int i = 0; i < numsSize; i++) {
        /* 找最小的 j ∈ [i+1, n]，使 prefix[j] - prefix[i] >= target */
        long long need = prefix[i] + target;
        int lo = i + 1;
        int hi = numsSize;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (prefix[mid] >= need) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        if (lo <= numsSize && prefix[lo] >= need) {
            int len = lo - i;
            if (len < ans) {
                ans = len;
            }
        }
    }

    free(prefix);
    return ans == numsSize + 1 ? 0 : ans;
}
