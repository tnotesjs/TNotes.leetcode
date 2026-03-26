int* findIndices(int* nums, int numsSize, int indexDifference, int valueDifference, int* returnSize) {
    *returnSize = 2;
    int* res = (int*)malloc(2 * sizeof(int));
    int minIdx = 0, maxIdx = 0;
    for (int i = indexDifference; i < numsSize; i++) {
        int j = i - indexDifference;
        if (nums[j] < nums[minIdx]) minIdx = j;
        if (nums[j] > nums[maxIdx]) maxIdx = j;
        long long d1 = (long long)nums[i] - nums[minIdx];
        if (d1 < 0) d1 = -d1;
        if (d1 >= valueDifference) { res[0] = minIdx; res[1] = i; return res; }
        long long d2 = (long long)nums[i] - nums[maxIdx];
        if (d2 < 0) d2 = -d2;
        if (d2 >= valueDifference) { res[0] = maxIdx; res[1] = i; return res; }
    }
    res[0] = -1; res[1] = -1;
    return res;
}
