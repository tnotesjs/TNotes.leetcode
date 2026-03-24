int* findMinHeightTrees(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    if (n == 1) {
        int* res = (int*)malloc(sizeof(int));
        res[0] = 0; *returnSize = 1;
        return res;
    }
    int* degree = (int*)calloc(n, sizeof(int));
    int** graph = (int**)malloc(sizeof(int*) * n);
    int* gSize = (int*)calloc(n, sizeof(int));
    int* gCap = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++) { gCap[i] = 4; graph[i] = (int*)malloc(sizeof(int) * 4); }
    for (int i = 0; i < edgesSize; i++) {
        int a = edges[i][0], b = edges[i][1];
        if (gSize[a] == gCap[a]) { gCap[a] *= 2; graph[a] = realloc(graph[a], sizeof(int) * gCap[a]); }
        if (gSize[b] == gCap[b]) { gCap[b] *= 2; graph[b] = realloc(graph[b], sizeof(int) * gCap[b]); }
        graph[a][gSize[a]++] = b;
        graph[b][gSize[b]++] = a;
        degree[a]++; degree[b]++;
    }
    int* leaves = (int*)malloc(sizeof(int) * n);
    int lSize = 0;
    for (int i = 0; i < n; i++) if (degree[i] == 1) leaves[lSize++] = i;
    int remaining = n;
    while (remaining > 2) {
        remaining -= lSize;
        int* newLeaves = (int*)malloc(sizeof(int) * n);
        int nlSize = 0;
        for (int i = 0; i < lSize; i++) {
            int leaf = leaves[i];
            for (int j = 0; j < gSize[leaf]; j++) {
                int nb = graph[leaf][j];
                if (--degree[nb] == 1) newLeaves[nlSize++] = nb;
            }
        }
        free(leaves);
        leaves = newLeaves;
        lSize = nlSize;
    }
    *returnSize = lSize;
    for (int i = 0; i < n; i++) free(graph[i]);
    free(graph); free(gSize); free(gCap); free(degree);
    return leaves;
}
