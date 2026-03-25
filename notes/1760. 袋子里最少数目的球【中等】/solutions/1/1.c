int minimumSize(int* nums, int numsSize, int maxOperations) {
    int lo = 1, hi = 0;
    for (int i = 0; i < numsSize; i++) if (nums[i] > hi) hi = nums[i];
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        long long ops = 0;
        for (int i = 0; i < numsSize; i++)
            ops += (nums[i] - 1) / mid;
        if (ops <= maxOperations) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
