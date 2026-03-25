int longestSubarray(int* nums, int numsSize, int limit) {
    int* maxQ = (int*)malloc(numsSize * sizeof(int));
    int* minQ = (int*)malloc(numsSize * sizeof(int));
    int mxH = 0, mxT = 0, mnH = 0, mnT = 0;
    int left = 0, res = 0;
    for (int right = 0; right < numsSize; right++) {
        while (mxH < mxT && nums[maxQ[mxT - 1]] <= nums[right]) mxT--;
        while (mnH < mnT && nums[minQ[mnT - 1]] >= nums[right]) mnT--;
        maxQ[mxT++] = right;
        minQ[mnT++] = right;
        while (nums[maxQ[mxH]] - nums[minQ[mnH]] > limit) {
            left++;
            if (maxQ[mxH] < left) mxH++;
            if (minQ[mnH] < left) mnH++;
        }
        int len = right - left + 1;
        if (len > res) res = len;
    }
    free(maxQ); free(minQ);
    return res;
}
