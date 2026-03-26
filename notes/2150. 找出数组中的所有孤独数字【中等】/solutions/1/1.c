int cmp2150(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findLonely(int* nums, int numsSize, int* returnSize) {
    qsort(nums, numsSize, sizeof(int), cmp2150);
    int* res = (int*)malloc(sizeof(int) * numsSize);
    *returnSize = 0;
    for (int i = 0; i < numsSize; i++) {
        int lonely = 1;
        if (i > 0 && (nums[i] == nums[i - 1] || nums[i] - nums[i - 1] == 1)) lonely = 0;
        if (i < numsSize - 1 && (nums[i] == nums[i + 1] || nums[i + 1] - nums[i] == 1)) lonely = 0;
        if (lonely) res[(*returnSize)++] = nums[i];
    }
    return res;
}
