int minimumAverageDifference(int* nums, int numsSize) {
    long long total = 0;
    for (int i = 0; i < numsSize; i++) total += nums[i];
    long long leftSum = 0, minDiff = __LONG_LONG_MAX__;
    int idx = 0;
    for (int i = 0; i < numsSize; i++) {
        leftSum += nums[i];
        long long leftAvg = leftSum / (i + 1);
        long long rightAvg = (i == numsSize - 1) ? 0 : (total - leftSum) / (numsSize - i - 1);
        long long diff = leftAvg - rightAvg;
        if (diff < 0) diff = -diff;
        if (diff < minDiff) {
            minDiff = diff;
            idx = i;
        }
    }
    return idx;
}
