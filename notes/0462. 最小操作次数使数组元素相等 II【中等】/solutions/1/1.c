int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int minMoves2(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int mid = nums[numsSize / 2];
    int res = 0;
    for (int i = 0; i < numsSize; i++) res += abs(nums[i] - mid);
    return res;
}
