int* eventualSafeNodes(int** graph, int graphSize, int* graphColSize, int* returnSize) {
    int n = graphSize;
    int* outDeg = (int*)calloc(n, sizeof(int));
    int** rg = (int**)malloc(sizeof(int*) * n);
    int* rgSize = (int*)calloc(n, sizeof(int));
    int* rgCap = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++) { rg[i] = (int*)malloc(sizeof(int) * 4); rgCap[i] = 4; }
    for (int i = 0; i < n; i++) {
        outDeg[i] = graphColSize[i];
        for (int j = 0; j < graphColSize[i]; j++) {
            int v = graph[i][j];
            if (rgSize[v] == rgCap[v]) { rgCap[v] *= 2; rg[v] = realloc(rg[v], sizeof(int) * rgCap[v]); }
            rg[v][rgSize[v]++] = i;
        }
    }
    int* queue = (int*)malloc(sizeof(int) * n);
    int front = 0, back = 0;
    bool* safe = (bool*)calloc(n, sizeof(bool));
    for (int i = 0; i < n; i++) if (outDeg[i] == 0) queue[back++] = i;
    while (front < back) {
        int u = queue[front++];
        safe[u] = true;
        for (int i = 0; i < rgSize[u]; i++) {
            int v = rg[u][i];
            if (--outDeg[v] == 0) queue[back++] = v;
        }
    }
    int* res = (int*)malloc(sizeof(int) * n);
    *returnSize = 0;
    for (int i = 0; i < n; i++) if (safe[i]) res[(*returnSize)++] = i;
    for (int i = 0; i < n; i++) free(rg[i]);
    free(rg); free(rgSize); free(rgCap); free(outDeg); free(queue); free(safe);
    return res;
}
