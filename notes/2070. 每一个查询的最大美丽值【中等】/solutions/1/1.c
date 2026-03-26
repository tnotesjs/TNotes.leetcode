int cmp2070(const void* a, const void* b) {
    int* x = *(int**)a, *y = *(int**)b;
    return x[0] - y[0];
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* maximumBeauty(int** items, int itemsSize, int* itemsColSize, int* queries, int queriesSize, int* returnSize) {
    qsort(items, itemsSize, sizeof(int*), cmp2070);
    for (int i = 1; i < itemsSize; i++) {
        if (items[i][1] < items[i - 1][1]) items[i][1] = items[i - 1][1];
    }
    *returnSize = queriesSize;
    int* ans = (int*)malloc(queriesSize * sizeof(int));
    for (int i = 0; i < queriesSize; i++) {
        int lo = 0, hi = itemsSize - 1, pos = -1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (items[mid][0] <= queries[i]) { pos = mid; lo = mid + 1; }
            else hi = mid - 1;
        }
        ans[i] = pos >= 0 ? items[pos][1] : 0;
    }
    return ans;
}
