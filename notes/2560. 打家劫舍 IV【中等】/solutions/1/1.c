int minCapability(int* nums, int numsSize, int k) {
    int lo = nums[0], hi = nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] < lo) lo = nums[i];
        if (nums[i] > hi) hi = nums[i];
    }
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        int cnt = 0, prev = 0;
        for (int i = 0; i < numsSize; i++) {
            if (nums[i] <= mid && !prev) { cnt++; prev = 1; }
            else prev = 0;
        }
        if (cnt >= k) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
