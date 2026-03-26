int cmpCell(const void* a, const void* b) {
    int* x = *(int**)a, *y = *(int**)b;
    return (x[0] > y[0]) - (x[0] < y[0]);
}

int maxIncreasingCells(int** mat, int matSize, int* matColSize) {
    int m = matSize, n = matColSize[0], total = m * n;
    int** cells = (int**)malloc(total * sizeof(int*));
    int idx = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            cells[idx] = (int*)malloc(3 * sizeof(int));
            cells[idx][0] = mat[i][j]; cells[idx][1] = i; cells[idx][2] = j;
            idx++;
        }
    qsort(cells, total, sizeof(int*), cmpCell);

    int* rowMax = (int*)calloc(m, sizeof(int));
    int* colMax = (int*)calloc(n, sizeof(int));
    int* tmpR = (int*)malloc(total * sizeof(int));
    int* tmpC = (int*)malloc(total * sizeof(int));
    int* tmpV = (int*)malloc(total * sizeof(int));

    int res = 0, i = 0;
    while (i < total) {
        int j = i;
        while (j < total && cells[j][0] == cells[i][0]) j++;
        int cnt = 0;
        for (int k = i; k < j; k++) {
            int r = cells[k][1], c = cells[k][2];
            int val = (rowMax[r] > colMax[c] ? rowMax[r] : colMax[c]) + 1;
            tmpR[cnt] = r; tmpC[cnt] = c; tmpV[cnt] = val; cnt++;
            if (val > res) res = val;
        }
        for (int k = 0; k < cnt; k++) {
            if (tmpV[k] > rowMax[tmpR[k]]) rowMax[tmpR[k]] = tmpV[k];
            if (tmpV[k] > colMax[tmpC[k]]) colMax[tmpC[k]] = tmpV[k];
        }
        i = j;
    }
    for (int k = 0; k < total; k++) free(cells[k]);
    free(cells); free(rowMax); free(colMax); free(tmpR); free(tmpC); free(tmpV);
    return res;
}
