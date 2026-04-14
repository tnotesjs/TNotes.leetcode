/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume
 * caller calls free().
 */
int compare(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int** threeSum(int* nums, int numsSize, int* returnSize,
               int** returnColumnSizes) {
    qsort(nums, numsSize, sizeof(int), compare);

    int capacity = 16;
    int** ans = (int**)malloc(capacity * sizeof(int*));
    *returnColumnSizes = (int*)malloc(capacity * sizeof(int));
    *returnSize = 0;

    for (int i = 0; i < numsSize - 2; i++) {
        // 跳过重复的数字
        if (i > 0 && nums[i] == nums[i - 1])
            continue;

        int left = i + 1, right = numsSize - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                if (*returnSize == capacity) {
                    capacity *= 2;
                    ans = (int**)realloc(ans, capacity * sizeof(int*));
                    *returnColumnSizes = (int*)realloc(*returnColumnSizes,
                                                       capacity * sizeof(int));
                }
                ans[*returnSize] = (int*)malloc(3 * sizeof(int));
                ans[*returnSize][0] = nums[i];
                ans[*returnSize][1] = nums[left];
                ans[*returnSize][2] = nums[right];
                (*returnColumnSizes)[*returnSize] = 3;
                (*returnSize)++;

                // 跳过重复的数字
                while (left < right && nums[left] == nums[left + 1])
                    left++;
                while (left < right && nums[right] == nums[right - 1])
                    right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return ans;
}
