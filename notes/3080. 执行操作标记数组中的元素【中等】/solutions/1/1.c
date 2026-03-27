#include <stdlib.h>
#include <string.h>

typedef struct { int val; int idx; } Pair;

int cmpPair(const void *a, const void *b) {
    Pair *pa = (Pair*)a, *pb = (Pair*)b;
    if (pa->val != pb->val) return pa->val - pb->val;
    return pa->idx - pb->idx;
}

long long* unmarkedSumArray(int* nums, int numsSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    *returnSize = queriesSize;
    Pair *sorted = malloc(numsSize * sizeof(Pair));
    for (int i = 0; i < numsSize; i++) sorted[i] = (Pair){nums[i], i};
    qsort(sorted, numsSize, sizeof(Pair), cmpPair);
    char *marked = calloc(numsSize, 1);
    long long totalSum = 0;
    for (int i = 0; i < numsSize; i++) totalSum += nums[i];
    long long *res = malloc(queriesSize * sizeof(long long));
    int ptr = 0;
    for (int q = 0; q < queriesSize; q++) {
        int index = queries[q][0], k = queries[q][1];
        if (!marked[index]) { marked[index] = 1; totalSum -= nums[index]; }
        int remaining = k;
        while (remaining > 0 && ptr < numsSize) {
            if (!marked[sorted[ptr].idx]) {
                marked[sorted[ptr].idx] = 1;
                totalSum -= sorted[ptr].val;
                remaining--;
            }
            ptr++;
        }
        res[q] = totalSum;
    }
    free(sorted); free(marked);
    return res;
}
