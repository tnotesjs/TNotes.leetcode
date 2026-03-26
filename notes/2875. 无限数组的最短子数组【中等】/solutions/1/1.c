int minSizeSubarray(int* nums, int numsSize, int target) {
    long long totalSum = 0;
    for (int i = 0; i < numsSize; i++) totalSum += nums[i];
    int fullCycles = target / totalSum;
    int remainder = target % totalSum;
    if (remainder == 0) return fullCycles * numsSize;
    // 双倍数组上滑动窗口
    int minLen = numsSize * 2 + 1;
    long long sum = 0;
    int left = 0;
    for (int right = 0; right < 2 * numsSize; right++) {
        sum += nums[right % numsSize];
        while (sum > remainder) {
            sum -= nums[left % numsSize];
            left++;
        }
        if (sum == remainder) {
            int len = right - left + 1;
            if (len < minLen) minLen = len;
        }
    }
    return minLen > 2 * numsSize ? -1 : fullCycles * numsSize + minLen;
}
