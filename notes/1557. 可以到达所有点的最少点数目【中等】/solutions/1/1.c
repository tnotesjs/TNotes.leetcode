int* findSmallestSetOfVertices(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    int* inDeg = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < edgesSize; i++) inDeg[edges[i][1]] = 1;
    int* res = (int*)malloc(n * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < n; i++)
        if (!inDeg[i]) res[cnt++] = i;
    free(inDeg);
    *returnSize = cnt;
    return res;
}
