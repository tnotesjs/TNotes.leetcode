void dfs(int** graph, int* graphColSize, int n, int node, int* path, int pathLen, int*** res, int* resSize, int** resColSize) {
    if (node == n - 1) {
        (*res)[*resSize] = (int*)malloc(sizeof(int) * pathLen);
        memcpy((*res)[*resSize], path, sizeof(int) * pathLen);
        (*resColSize)[*resSize] = pathLen;
        (*resSize)++;
        return;
    }
    for (int i = 0; i < graphColSize[node]; i++) {
        path[pathLen] = graph[node][i];
        dfs(graph, graphColSize, n, graph[node][i], path, pathLen + 1, res, resSize, resColSize);
    }
}

int** allPathsSourceTarget(int** graph, int graphSize, int* graphColSize, int* returnSize, int** returnColumnSizes) {
    int maxPaths = 1 << (graphSize - 1);
    int** res = (int**)malloc(sizeof(int*) * maxPaths);
    *returnColumnSizes = (int*)malloc(sizeof(int) * maxPaths);
    *returnSize = 0;
    int* path = (int*)malloc(sizeof(int) * graphSize);
    path[0] = 0;
    dfs(graph, graphColSize, graphSize, 0, path, 1, &res, returnSize, returnColumnSizes);
    free(path);
    return res;
}
