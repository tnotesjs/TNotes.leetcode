int firstCompleteIndex(int* arr, int arrSize, int** mat, int matSize, int* matColSize) {
    int m = matSize, n = matColSize[0];
    int total = m * n;
    int* posR = (int*)malloc((total + 1) * sizeof(int));
    int* posC = (int*)malloc((total + 1) * sizeof(int));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            posR[mat[i][j]] = i;
            posC[mat[i][j]] = j;
        }
    int* rowCnt = (int*)calloc(m, sizeof(int));
    int* colCnt = (int*)calloc(n, sizeof(int));
    for (int k = 0; k < arrSize; k++) {
        int r = posR[arr[k]], c = posC[arr[k]];
        rowCnt[r]++;
        colCnt[c]++;
        if (rowCnt[r] == n || colCnt[c] == m) {
            free(posR); free(posC); free(rowCnt); free(colCnt);
            return k;
        }
    }
    free(posR); free(posC); free(rowCnt); free(colCnt);
    return -1;
}
