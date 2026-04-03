/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** res;
int resSize;
int n;

void swap(int* a, int* b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
}

void backtrack(int* nums, int start, int* col) {
    if (start == n - 1) {
        int* perm = (int*)malloc(n * sizeof(int));
        memcpy(perm, nums, n * sizeof(int));
        col[resSize] = n;
        res[resSize++] = perm;
        return;
    }
    for (int i = start; i < n; i++) {
        swap(&nums[start], &nums[i]);
        backtrack(nums, start + 1, col);
        swap(&nums[start], &nums[i]);
    }
}

int** permute(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    n = numsSize;
    int total = 1;
    for (int i = 1; i <= n; i++) total *= i;
    res = (int**)malloc(total * sizeof(int*));
    *returnColumnSizes = (int*)malloc(total * sizeof(int));
    resSize = 0;
    backtrack(nums, 0, *returnColumnSizes);
    *returnSize = resSize;
    return res;
}
