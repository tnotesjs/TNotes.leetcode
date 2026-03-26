int longestNiceSubarray(int* nums, int numsSize) {
    int used = 0, left = 0, ans = 0;
    for (int right = 0; right < numsSize; right++) {
        while (used & nums[right]) {
            used ^= nums[left++];
        }
        used |= nums[right];
        int len = right - left + 1;
        if (len > ans) ans = len;
    }
    return ans;
}
