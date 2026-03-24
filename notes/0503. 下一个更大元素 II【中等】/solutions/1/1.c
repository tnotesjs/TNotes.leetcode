int* nextGreaterElements(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* res = (int*)malloc(sizeof(int) * numsSize);
    int* stack = (int*)malloc(sizeof(int) * numsSize);
    int top = 0;
    for (int i = 0; i < numsSize; i++) res[i] = -1;
    for (int i = 0; i < 2 * numsSize; i++) {
        while (top > 0 && nums[stack[top - 1]] < nums[i % numsSize])
            res[stack[--top]] = nums[i % numsSize];
        if (i < numsSize) stack[top++] = i;
    }
    free(stack);
    return res;
}
