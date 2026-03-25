#include <stdlib.h>

int* getSumAbsoluteDifferences(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int n = numsSize;
    long long* prefix = (long long*)calloc(n + 1, sizeof(long long));
    for (int i = 0; i < n; i++) prefix[i+1] = prefix[i] + nums[i];
    int* res = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        long long leftSum = prefix[i];
        long long rightSum = prefix[n] - prefix[i+1];
        res[i] = (int)((long long)nums[i] * i - leftSum + rightSum - (long long)nums[i] * (n-i-1));
    }
    free(prefix);
    return res;
}
