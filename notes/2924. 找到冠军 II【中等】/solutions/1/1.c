int findChampion(int n, int** edges, int edgesSize, int* edgesColSize) {
    int *inDeg = calloc(n, sizeof(int));
    for (int i = 0; i < edgesSize; i++) {
        inDeg[edges[i][1]]++;
    }
    int champion = -1;
    for (int i = 0; i < n; i++) {
        if (inDeg[i] == 0) {
            if (champion != -1) { free(inDeg); return -1; }
            champion = i;
        }
    }
    free(inDeg);
    return champion;
}
