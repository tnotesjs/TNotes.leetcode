#include <stdlib.h>

int* mostCompetitive(int* nums, int numsSize, int k, int* returnSize) {
    *returnSize = k;
    int* stack = (int*)malloc(k * sizeof(int));
    int top = 0;
    for (int i = 0; i < numsSize; i++) {
        while (top > 0 && stack[top-1] > nums[i] && top + numsSize - i > k)
            top--;
        if (top < k) stack[top++] = nums[i];
    }
    return stack;
}
