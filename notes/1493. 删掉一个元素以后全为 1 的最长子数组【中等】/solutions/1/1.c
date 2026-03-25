int longestSubarray(int* nums, int numsSize) {
    int left = 0, zeros = 0, res = 0;
    for (int right = 0; right < numsSize; right++) {
        if (nums[right] == 0) zeros++;
        while (zeros > 1) {
            if (nums[left] == 0) zeros--;
            left++;
        }
        int len = right - left;
        if (len > res) res = len;
    }
    return res;
}
