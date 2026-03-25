int* quietArr;
int* result;

int dfs(int** graph, int* graphSize, int u) {
    if (result[u] != -1) return result[u];
    result[u] = u;
    for (int i = 0; i < graphSize[u]; i++) {
        int cand = dfs(graph, graphSize, graph[u][i]);
        if (quietArr[cand] < quietArr[result[u]]) result[u] = cand;
    }
    return result[u];
}

int* loudAndRich(int** richer, int richerSize, int* richerColSize, int* quiet, int quietSize, int* returnSize) {
    int n = quietSize;
    int** graph = (int**)malloc(sizeof(int*) * n);
    int* graphSize = (int*)calloc(n, sizeof(int));
    int* graphCap = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++) { graph[i] = (int*)malloc(sizeof(int) * 4); graphCap[i] = 4; }
    for (int i = 0; i < richerSize; i++) {
        int a = richer[i][0], b = richer[i][1];
        if (graphSize[b] == graphCap[b]) { graphCap[b] *= 2; graph[b] = realloc(graph[b], sizeof(int) * graphCap[b]); }
        graph[b][graphSize[b]++] = a;
    }
    result = (int*)malloc(sizeof(int) * n);
    memset(result, -1, sizeof(int) * n);
    quietArr = quiet;
    for (int i = 0; i < n; i++) dfs(graph, graphSize, i);
    *returnSize = n;
    for (int i = 0; i < n; i++) free(graph[i]);
    free(graph); free(graphSize); free(graphCap);
    return result;
}
