/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume
 * caller calls free().
 */
int compare(const void* a, const void* b) {
    return (*(int*)a > *(int*)b) - (*(int*)a < *(int*)b);
}

int** fourSum(int* nums, int numsSize, int target, int* returnSize,
              int** returnColumnSizes) {
    qsort(nums, numsSize, sizeof(int), compare);

    int capacity = 16;
    int** ans = (int**)malloc(capacity * sizeof(int*));
    *returnColumnSizes = (int*)malloc(capacity * sizeof(int));
    *returnSize = 0;

    for (int i = 0; i < numsSize - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1])
            continue;
        for (int j = i + 1; j < numsSize - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1])
                continue;
            int left = j + 1, right = numsSize - 1;
            while (left < right) {
                // C 版本用 long long 防止四数相加溢出（数有效内容可达 -4 * 10^9
                // ~ 4 * 10^9）
                long long sum =
                    (long long)nums[i] + nums[j] + nums[left] + nums[right];
                if (sum == target) {
                    if (*returnSize == capacity) {
                        capacity *= 2;
                        ans = (int**)realloc(ans, capacity * sizeof(int*));
                        *returnColumnSizes = (int*)realloc(
                            *returnColumnSizes, capacity * sizeof(int));
                    }
                    ans[*returnSize] = (int*)malloc(4 * sizeof(int));
                    ans[*returnSize][0] = nums[i];
                    ans[*returnSize][1] = nums[j];
                    ans[*returnSize][2] = nums[left];
                    ans[*returnSize][3] = nums[right];
                    (*returnColumnSizes)[*returnSize] = 4;
                    (*returnSize)++;
                    while (left < right && nums[left] == nums[left + 1])
                        left++;
                    while (left < right && nums[right] == nums[right - 1])
                        right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return ans;
}
