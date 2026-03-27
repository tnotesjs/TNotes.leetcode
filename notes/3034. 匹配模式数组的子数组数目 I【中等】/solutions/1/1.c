int countMatchingSubarrays(int* nums, int numsSize, int* pattern, int patternSize) {
    int count = 0;
    for (int i = 0; i <= numsSize - patternSize - 1; i++) {
        int match = 1;
        for (int k = 0; k < patternSize; k++) {
            int diff = nums[i + k + 1] - nums[i + k];
            int p = diff > 0 ? 1 : (diff < 0 ? -1 : 0);
            if (p != pattern[k]) { match = 0; break; }
        }
        if (match) count++;
    }
    return count;
}
