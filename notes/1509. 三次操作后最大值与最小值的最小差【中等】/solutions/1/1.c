int cmpInt(const void* a, const void* b) { return *(int*)a < *(int*)b ? -1 : *(int*)a > *(int*)b; }

int minDifference(int* nums, int numsSize) {
    if (numsSize <= 4) return 0;
    qsort(nums, numsSize, sizeof(int), cmpInt);
    int n = numsSize;
    int res = nums[n-1] - nums[3];
    int d;
    d = nums[n-2] - nums[2]; if (d < res) res = d;
    d = nums[n-3] - nums[1]; if (d < res) res = d;
    d = nums[n-4] - nums[0]; if (d < res) res = d;
    return res;
}
