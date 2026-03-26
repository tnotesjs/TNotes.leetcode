long long matrixSumQueries(int n, int** queries, int queriesSize, int* queriesColSize) {
    int* rowUsed = (int*)calloc(n, sizeof(int));
    int* colUsed = (int*)calloc(n, sizeof(int));
    int rowCnt = 0, colCnt = 0;
    long long sum = 0;
    for (int i = queriesSize - 1; i >= 0; i--) {
        int type = queries[i][0], index = queries[i][1], val = queries[i][2];
        if (type == 0) {
            if (!rowUsed[index]) {
                sum += (long long)val * (n - colCnt);
                rowUsed[index] = 1;
                rowCnt++;
            }
        } else {
            if (!colUsed[index]) {
                sum += (long long)val * (n - rowCnt);
                colUsed[index] = 1;
                colCnt++;
            }
        }
    }
    free(rowUsed); free(colUsed);
    return sum;
}
