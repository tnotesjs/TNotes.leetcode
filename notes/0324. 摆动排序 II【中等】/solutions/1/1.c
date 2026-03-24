int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

void wiggleSort(int* nums, int numsSize) {
    int* sorted = (int*)malloc(sizeof(int) * numsSize);
    memcpy(sorted, nums, sizeof(int) * numsSize);
    qsort(sorted, numsSize, sizeof(int), cmp);
    int left = (numsSize - 1) / 2, right = numsSize - 1;
    for (int i = 0; i < numsSize; i++) {
        nums[i] = (i % 2 == 0) ? sorted[left--] : sorted[right--];
    }
    free(sorted);
}
