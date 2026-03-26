int longestSubarray(int* nums, int numsSize) {
    int maxVal = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > maxVal) maxVal = nums[i];
    }
    int ans = 0, cur = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == maxVal) {
            cur++;
            if (cur > ans) ans = cur;
        } else {
            cur = 0;
        }
    }
    return ans;
}
