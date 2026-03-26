int* cycleLengthQueries(int n, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int *ans = (int *)malloc(sizeof(int) * queriesSize);
    for (int i = 0; i < queriesSize; i++) {
        int a = queries[i][0], b = queries[i][1];
        int len = 1;
        while (a != b) {
            if (a > b) a >>= 1;
            else b >>= 1;
            len++;
        }
        ans[i] = len;
    }
    *returnSize = queriesSize;
    return ans;
}
