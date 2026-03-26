int networkBecomesIdle(int** edges, int edgesSize, int* edgesColSize, int* patience, int patienceSize) {
    int n = patienceSize;
    int* adjCnt = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < edgesSize; i++) {
        adjCnt[edges[i][0]]++;
        adjCnt[edges[i][1]]++;
    }
    int** adj = (int**)malloc(n * sizeof(int*));
    int* idx = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) adj[i] = (int*)malloc(adjCnt[i] * sizeof(int));
    for (int i = 0; i < edgesSize; i++) {
        adj[edges[i][0]][idx[edges[i][0]]++] = edges[i][1];
        adj[edges[i][1]][idx[edges[i][1]]++] = edges[i][0];
    }
    int* dist = (int*)malloc(n * sizeof(int));
    memset(dist, -1, n * sizeof(int));
    dist[0] = 0;
    int* queue = (int*)malloc(n * sizeof(int));
    int head = 0, tail = 0;
    queue[tail++] = 0;
    while (head < tail) {
        int u = queue[head++];
        for (int i = 0; i < adjCnt[u]; i++) {
            int v = adj[u][i];
            if (dist[v] == -1) { dist[v] = dist[u] + 1; queue[tail++] = v; }
        }
    }
    int ans = 0;
    for (int i = 1; i < n; i++) {
        int rt = 2 * dist[i];
        int lastSend = (rt - 1) / patience[i] * patience[i];
        int lastRecv = lastSend + rt;
        if (lastRecv > ans) ans = lastRecv;
    }
    for (int i = 0; i < n; i++) free(adj[i]);
    free(adj); free(adjCnt); free(idx); free(dist); free(queue);
    return ans + 1;
}
