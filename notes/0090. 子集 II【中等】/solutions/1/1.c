/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

void backtrack(int* nums, int numsSize, int start, int* path, int pathSize,
               int** result, int* returnSize, int** returnColumnSizes) {
    result[*returnSize] = (int*)malloc(sizeof(int) * pathSize);
    memcpy(result[*returnSize], path, sizeof(int) * pathSize);
    (*returnColumnSizes)[*returnSize] = pathSize;
    (*returnSize)++;

    for (int i = start; i < numsSize; i++) {
        if (i > start && nums[i] == nums[i - 1]) continue; // 跳过同层重复
        path[pathSize] = nums[i];
        backtrack(nums, numsSize, i + 1, path, pathSize + 1, result, returnSize, returnColumnSizes);
    }
}

int** subsetsWithDup(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int** result = (int**)malloc(sizeof(int*) * (1 << numsSize));
    *returnColumnSizes = (int*)malloc(sizeof(int) * (1 << numsSize));
    *returnSize = 0;
    int* path = (int*)malloc(sizeof(int) * numsSize);
    backtrack(nums, numsSize, 0, path, 0, result, returnSize, returnColumnSizes);
    free(path);
    return result;
}
