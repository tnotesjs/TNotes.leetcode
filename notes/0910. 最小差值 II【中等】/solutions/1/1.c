int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int smallestRangeII(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int n = numsSize;
    int res = nums[n - 1] - nums[0];
    for (int i = 0; i < n - 1; i++) {
        int hi = nums[i] + k > nums[n - 1] - k ? nums[i] + k : nums[n - 1] - k;
        int lo = nums[0] + k < nums[i + 1] - k ? nums[0] + k : nums[i + 1] - k;
        int d = hi - lo;
        if (d < res) res = d;
    }
    return res;
}
