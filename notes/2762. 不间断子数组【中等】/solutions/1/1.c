long long continuousSubarrays(int *nums, int numsSize) {
    long long res = 0;
    int left = 0;
    int maxQ[numsSize], minQ[numsSize];
    int mxH = 0, mxT = 0, mnH = 0, mnT = 0;
    for (int right = 0; right < numsSize; right++) {
        while (mxH < mxT && nums[maxQ[mxT - 1]] <= nums[right]) mxT--;
        maxQ[mxT++] = right;
        while (mnH < mnT && nums[minQ[mnT - 1]] >= nums[right]) mnT--;
        minQ[mnT++] = right;
        while (nums[maxQ[mxH]] - nums[minQ[mnH]] > 2) {
            left++;
            if (maxQ[mxH] < left) mxH++;
            if (minQ[mnH] < left) mnH++;
        }
        res += right - left + 1;
    }
    return res;
}
