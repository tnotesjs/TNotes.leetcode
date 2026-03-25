int minOperations(int* nums, int numsSize, int x) {
    long long total = 0;
    for (int i = 0; i < numsSize; i++) total += nums[i];
    long long target = total - x;
    if (target < 0) return -1;
    if (target == 0) return numsSize;
    int left = 0, maxLen = -1;
    long long sum = 0;
    for (int right = 0; right < numsSize; right++) {
        sum += nums[right];
        while (sum > target) sum -= nums[left++];
        if (sum == target && right - left + 1 > maxLen)
            maxLen = right - left + 1;
    }
    return maxLen == -1 ? -1 : numsSize - maxLen;
}
