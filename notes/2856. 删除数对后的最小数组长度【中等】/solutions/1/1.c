int minLengthAfterRemovals(int* nums, int numsSize) {
    int mid = nums[numsSize / 2];
    int lo = 0, hi = numsSize, m;
    while (lo < hi) { m = (lo + hi) / 2; if (nums[m] < mid) lo = m + 1; else hi = m; }
    int left = lo;
    lo = 0; hi = numsSize;
    while (lo < hi) { m = (lo + hi) / 2; if (nums[m] <= mid) lo = m + 1; else hi = m; }
    int freq = lo - left;
    return freq > numsSize / 2 ? 2 * freq - numsSize : numsSize % 2;
}
