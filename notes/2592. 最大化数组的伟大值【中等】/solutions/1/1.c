int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int maximizeGreatness(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int i = 0;
    for (int j = 0; j < numsSize; j++) {
        if (nums[j] > nums[i]) i++;
    }
    return i;
}
