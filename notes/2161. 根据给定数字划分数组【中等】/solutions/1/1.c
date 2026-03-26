/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* pivotArray(int* nums, int numsSize, int pivot, int* returnSize) {
    int* res = (int*)malloc(sizeof(int) * numsSize);
    *returnSize = numsSize;
    int idx = 0;
    for (int i = 0; i < numsSize; i++)
        if (nums[i] < pivot) res[idx++] = nums[i];
    for (int i = 0; i < numsSize; i++)
        if (nums[i] == pivot) res[idx++] = nums[i];
    for (int i = 0; i < numsSize; i++)
        if (nums[i] > pivot) res[idx++] = nums[i];
    return res;
}
