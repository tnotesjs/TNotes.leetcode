int cmp2294(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int partitionArray(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp2294);
    int res = 1, start = nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] - start > k) {
            res++;
            start = nums[i];
        }
    }
    return res;
}
