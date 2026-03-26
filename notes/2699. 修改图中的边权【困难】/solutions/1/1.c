int** modifiedGraphEdges(int n, int** edges, int edgesSize, int* edgesColSize, int source, int destination, int target, int* returnSize, int** returnColumnSizes) {
    long long INF = (long long)2e15;
    long long dDest[101];
    int vis[101];
    for (int i = 0; i < n; i++) { dDest[i] = INF; vis[i] = 0; }
    dDest[destination] = 0;
    for (int iter = 0; iter < n; iter++) {
        int u = -1; long long best = INF;
        for (int i = 0; i < n; i++) if (!vis[i] && dDest[i] < best) { best = dDest[i]; u = i; }
        if (u == -1) break;
        vis[u] = 1;
        for (int e = 0; e < edgesSize; e++) {
            if (edges[e][2] == -1) continue;
            int a = edges[e][0], b = edges[e][1], w = edges[e][2];
            if (a == u && best + w < dDest[b]) dDest[b] = best + w;
            if (b == u && best + w < dDest[a]) dDest[a] = best + w;
        }
    }
    if (dDest[source] < target) { *returnSize = 0; *returnColumnSizes = NULL; return NULL; }

    long long dist[101];
    for (int i = 0; i < n; i++) { dist[i] = INF; vis[i] = 0; }
    dist[source] = 0;
    for (int iter = 0; iter < n; iter++) {
        int u = -1; long long best = INF;
        for (int i = 0; i < n; i++) if (!vis[i] && dist[i] < best) { best = dist[i]; u = i; }
        if (u == -1) break;
        vis[u] = 1;
        for (int e = 0; e < edgesSize; e++) {
            int a = edges[e][0], b = edges[e][1];
            int v = -1;
            if (a == u) v = b;
            else if (b == u) v = a;
            else continue;
            long long w = edges[e][2];
            if (w == -1) {
                long long desired = (long long)target - best - dDest[v];
                w = desired > 1 ? desired : 1;
                edges[e][2] = (int)w;
            }
            if (best + w < dist[v]) dist[v] = best + w;
        }
    }
    if (dist[destination] != target) { *returnSize = 0; *returnColumnSizes = NULL; return NULL; }

    for (int i = 0; i < edgesSize; i++)
        if (edges[i][2] == -1) edges[i][2] = 2000000000;

    *returnSize = edgesSize;
    *returnColumnSizes = (int*)malloc(edgesSize * sizeof(int));
    for (int i = 0; i < edgesSize; i++) (*returnColumnSizes)[i] = 3;
    return edges;
}
