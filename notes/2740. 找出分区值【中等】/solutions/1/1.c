int cmp(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int findValueOfPartition(int *nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int res = nums[1] - nums[0];
    for (int i = 2; i < numsSize; i++) {
        if (nums[i] - nums[i - 1] < res) {
            res = nums[i] - nums[i - 1];
        }
    }
    return res;
}
