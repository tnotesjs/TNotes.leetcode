int minimumDeletions(int* nums, int numsSize) {
    int minIdx = 0, maxIdx = 0;
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] < nums[minIdx]) minIdx = i;
        if (nums[i] > nums[maxIdx]) maxIdx = i;
    }
    int l = minIdx < maxIdx ? minIdx : maxIdx;
    int r = minIdx > maxIdx ? minIdx : maxIdx;
    int a = r + 1;
    int b = numsSize - l;
    int c = l + 1 + numsSize - r;
    int res = a < b ? a : b;
    return res < c ? res : c;
}
