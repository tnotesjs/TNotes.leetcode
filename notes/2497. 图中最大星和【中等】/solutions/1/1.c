int cmpDesc2497(const void *a, const void *b) {
    return *(int *)b - *(int *)a;
}

int maxStarSum(int* vals, int valsSize, int** edges, int edgesSize, int* edgesColSize, int k) {
    int n = valsSize;
    int **neighbors = (int **)malloc(n * sizeof(int *));
    int *nCnt = (int *)calloc(n, sizeof(int));
    int *nCap = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        nCap[i] = 4;
        neighbors[i] = (int *)malloc(4 * sizeof(int));
    }
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        if (nCnt[u] == nCap[u]) { nCap[u] *= 2; neighbors[u] = realloc(neighbors[u], nCap[u] * sizeof(int)); }
        if (nCnt[v] == nCap[v]) { nCap[v] *= 2; neighbors[v] = realloc(neighbors[v], nCap[v] * sizeof(int)); }
        neighbors[u][nCnt[u]++] = vals[v];
        neighbors[v][nCnt[v]++] = vals[u];
    }
    int ans = -2147483647;
    for (int i = 0; i < n; i++) {
        qsort(neighbors[i], nCnt[i], sizeof(int), cmpDesc2497);
        int sum = vals[i];
        int lim = k < nCnt[i] ? k : nCnt[i];
        for (int j = 0; j < lim; j++) {
            if (neighbors[i][j] <= 0) break;
            sum += neighbors[i][j];
        }
        if (sum > ans) ans = sum;
        free(neighbors[i]);
    }
    free(neighbors); free(nCnt); free(nCap);
    return ans;
}
