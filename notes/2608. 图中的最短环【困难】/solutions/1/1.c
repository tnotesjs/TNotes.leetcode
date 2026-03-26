int findShortestCycle(int n, int **edges, int edgesSize, int *edgesColSize) {
    int **g = malloc(n * sizeof(int *));
    int *gSize = calloc(n, sizeof(int));
    int *gCap = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) { g[i] = malloc(16 * sizeof(int)); gCap[i] = 16; }
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        if (gSize[u] == gCap[u]) { gCap[u] *= 2; g[u] = realloc(g[u], gCap[u] * sizeof(int)); }
        g[u][gSize[u]++] = v;
        if (gSize[v] == gCap[v]) { gCap[v] *= 2; g[v] = realloc(g[v], gCap[v] * sizeof(int)); }
        g[v][gSize[v]++] = u;
    }
    int ans = n + 1;
    int *dist = malloc(n * sizeof(int));
    int *queue = malloc(n * sizeof(int));
    for (int start = 0; start < n; start++) {
        memset(dist, -1, n * sizeof(int));
        dist[start] = 0;
        int front = 0, back = 0;
        queue[back++] = start;
        while (front < back) {
            int u = queue[front++];
            for (int k = 0; k < gSize[u]; k++) {
                int v = g[u][k];
                if (dist[v] == -1) {
                    dist[v] = dist[u] + 1;
                    queue[back++] = v;
                } else if (dist[v] >= dist[u]) {
                    int cycle = dist[u] + dist[v] + 1;
                    if (cycle < ans) ans = cycle;
                }
            }
        }
    }
    for (int i = 0; i < n; i++) free(g[i]);
    free(g); free(gSize); free(gCap); free(dist); free(queue);
    return ans > n ? -1 : ans;
}
