/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
long long* maximumEvenSplit(long long finalSum, int* returnSize) {
    if (finalSum % 2 != 0) {
        *returnSize = 0;
        return NULL;
    }
    // 最多拆分数量约 sqrt(finalSum)
    int cap = 100000;
    long long* res = (long long*)malloc(sizeof(long long) * cap);
    *returnSize = 0;
    long long cur = 2, remaining = finalSum;
    while (remaining > cur * 2) {
        res[(*returnSize)++] = cur;
        remaining -= cur;
        cur += 2;
    }
    res[(*returnSize)++] = remaining;
    return res;
}
