int cmp(const void* a, const void* b) {
    int x = *(int*)a, y = *(int*)b;
    return (x > y) - (x < y);
}

int minimizeSum(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int n = numsSize;
    int a = nums[n - 1] - nums[2];
    int b = nums[n - 3] - nums[0];
    int c = nums[n - 2] - nums[1];
    int ans = a < b ? a : b;
    return ans < c ? ans : c;
}
