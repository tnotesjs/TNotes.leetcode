/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
// 二分找左边界：最小的 >= t 的位置
int lowerBound(int* nums, int numsSize, int t) {
    int left = 0, right = numsSize;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < t) left = mid + 1;
        else right = mid;
    }
    return left;
}

int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    *returnSize = 2;
    int* res = (int*)malloc(2 * sizeof(int));

    int start = lowerBound(nums, numsSize, target);
    if (start == numsSize || nums[start] != target) {
        res[0] = res[1] = -1;
        return res;
    }
    res[0] = start;
    res[1] = lowerBound(nums, numsSize, target + 1) - 1;
    return res;
}
