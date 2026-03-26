int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int** divideArray(int* nums, int numsSize, int k, int* returnSize, int** returnColumnSizes) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int groups = numsSize / 3;
    int** res = malloc(groups * sizeof(int*));
    *returnColumnSizes = malloc(groups * sizeof(int));
    *returnSize = 0;
    for (int i = 0; i < numsSize; i += 3) {
        if (nums[i + 2] - nums[i] > k) {
            *returnSize = 0;
            return res;
        }
        res[*returnSize] = malloc(3 * sizeof(int));
        res[*returnSize][0] = nums[i];
        res[*returnSize][1] = nums[i + 1];
        res[*returnSize][2] = nums[i + 2];
        (*returnColumnSizes)[*returnSize] = 3;
        (*returnSize)++;
    }
    return res;
}
