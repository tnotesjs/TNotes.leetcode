/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* rearrangeArray(int* nums, int numsSize, int* returnSize) {
    int* res = (int*)malloc(sizeof(int) * numsSize);
    *returnSize = numsSize;
    int pi = 0, ni = 1;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > 0) {
            res[pi] = nums[i];
            pi += 2;
        } else {
            res[ni] = nums[i];
            ni += 2;
        }
    }
    return res;
}
