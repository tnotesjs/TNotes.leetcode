/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* colorTheArray(int n, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    *returnSize = queriesSize;
    int* colors = (int*)calloc(n, sizeof(int));
    int* ans = (int*)malloc(queriesSize * sizeof(int));
    int count = 0;
    for (int q = 0; q < queriesSize; q++) {
        int idx = queries[q][0], color = queries[q][1];
        int old = colors[idx];
        if (old != 0) {
            if (idx > 0 && colors[idx - 1] == old) count--;
            if (idx < n - 1 && colors[idx + 1] == old) count--;
        }
        colors[idx] = color;
        if (idx > 0 && colors[idx - 1] == color) count++;
        if (idx < n - 1 && colors[idx + 1] == color) count++;
        ans[q] = count;
    }
    free(colors);
    return ans;
}
