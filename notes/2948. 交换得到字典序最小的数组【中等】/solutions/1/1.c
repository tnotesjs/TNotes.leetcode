int cmpInt(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int cmpPair(const void* a, const void* b) {
    const int* pa = *(const int**)a;
    const int* pb = *(const int**)b;
    if (pa[1] != pb[1]) return pa[1] < pb[1] ? -1 : 1;
    return 0;
}

int* lexicographicallySmallestArray(int* nums, int numsSize, int limit, int* returnSize) {
    int n = numsSize;
    *returnSize = n;
    int** pairs = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        pairs[i] = (int*)malloc(2 * sizeof(int));
        pairs[i][0] = i;
        pairs[i][1] = nums[i];
    }
    qsort(pairs, n, sizeof(int*), cmpPair);

    int* res = (int*)malloc(n * sizeof(int));
    int* groupIdx = (int*)malloc(n * sizeof(int));
    int i = 0;
    while (i < n) {
        int j = i + 1;
        while (j < n && (long long)pairs[j][1] - pairs[j - 1][1] <= limit) j++;
        int sz = j - i;
        for (int k = 0; k < sz; k++) groupIdx[k] = pairs[i + k][0];
        qsort(groupIdx, sz, sizeof(int), cmpInt);
        for (int k = 0; k < sz; k++) res[groupIdx[k]] = pairs[i + k][1];
        i = j;
    }

    for (int i = 0; i < n; i++) free(pairs[i]);
    free(pairs); free(groupIdx);
    return res;
}
