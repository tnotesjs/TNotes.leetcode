int* smallestSubarrays(int* nums, int numsSize, int* returnSize) {
    int n = numsSize;
    int* ans = (int*)malloc(n * sizeof(int));
    *returnSize = n;
    int lastBit[30] = {0};
    for (int i = n - 1; i >= 0; i--) {
        for (int b = 0; b < 30; b++) {
            if (nums[i] & (1 << b)) lastBit[b] = i;
        }
        int farthest = i;
        for (int b = 0; b < 30; b++) {
            if (lastBit[b] > farthest) farthest = lastBit[b];
        }
        ans[i] = farthest - i + 1;
    }
    return ans;
}
