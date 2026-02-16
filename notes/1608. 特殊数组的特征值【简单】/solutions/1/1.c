int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int specialArray(int* nums, int numsSize) {
    // 升序排序
    qsort(nums, numsSize, sizeof(int), cmp);
    
    for (int i = 0; i < numsSize; i++) {
        int x = numsSize - i;
        int prev = (i == 0) ? -1 : nums[i - 1];
        if (nums[i] >= x && prev < x) {
            return x;
        }
    }
    
    return -1;
}
