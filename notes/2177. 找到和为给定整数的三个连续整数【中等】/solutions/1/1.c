/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
long long* sumOfThree(long long num, int* returnSize) {
    if (num % 3 != 0) {
        *returnSize = 0;
        return NULL;
    }
    long long mid = num / 3;
    long long* res = (long long*)malloc(sizeof(long long) * 3);
    res[0] = mid - 1;
    res[1] = mid;
    res[2] = mid + 1;
    *returnSize = 3;
    return res;
}
