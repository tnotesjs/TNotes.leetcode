#include <stdlib.h>
#include <stdbool.h>

bool* canEat(int* candiesCount, int candiesCountSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int n = candiesCountSize;
    long long* prefix = (long long*)calloc(n + 1, sizeof(long long));
    for (int i = 0; i < n; i++) prefix[i+1] = prefix[i] + candiesCount[i];
    *returnSize = queriesSize;
    bool* res = (bool*)malloc(queriesSize * sizeof(bool));
    for (int i = 0; i < queriesSize; i++) {
        int type = queries[i][0], day = queries[i][1], cap = queries[i][2];
        long long minEat = (long long)day + 1;
        long long maxEat = (long long)(day + 1) * cap;
        res[i] = maxEat > prefix[type] && minEat <= prefix[type + 1];
    }
    free(prefix);
    return res;
}
