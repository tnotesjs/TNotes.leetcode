#include <limits.h>

int findUnsortedSubarray(int* nums, int numsSize) {
    int maxVal = INT_MIN, minVal = INT_MAX;
    int left = -1, right = -1;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] < maxVal) right = i;
        else maxVal = nums[i];
    }
    for (int i = numsSize - 1; i >= 0; i--) {
        if (nums[i] > minVal) left = i;
        else minVal = nums[i];
    }
    return right == -1 ? 0 : right - left + 1;
}
