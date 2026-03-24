int lengthOfLIS(int* nums, int numsSize) {
    int* tails = (int*)malloc(sizeof(int) * numsSize);
    int size = 0;
    for (int i = 0; i < numsSize; i++) {
        int lo = 0, hi = size;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (tails[mid] < nums[i]) lo = mid + 1;
            else hi = mid;
        }
        tails[lo] = nums[i];
        if (lo == size) size++;
    }
    free(tails);
    return size;
}
