int* minOperationsQueries(int n, int** edges, int edgesSize, int* edgesColSize,
    int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int LOG = 15;
    int* adjHead = (int*)malloc(n * sizeof(int));
    memset(adjHead, -1, n * sizeof(int));
    int* adjTo = (int*)malloc(4 * n * sizeof(int));
    int* adjW = (int*)malloc(4 * n * sizeof(int));
    int* adjNext = (int*)malloc(4 * n * sizeof(int));
    int ei = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1], w = edges[i][2];
        adjTo[ei]=v; adjW[ei]=w; adjNext[ei]=adjHead[u]; adjHead[u]=ei++;
        adjTo[ei]=u; adjW[ei]=w; adjNext[ei]=adjHead[v]; adjHead[v]=ei++;
    }
    int* depth = (int*)calloc(n, sizeof(int));
    int** parent = (int**)malloc(LOG * sizeof(int*));
    for (int j = 0; j < LOG; j++) {
        parent[j] = (int*)malloc(n * sizeof(int));
        memset(parent[j], -1, n * sizeof(int));
    }
    int (*wCnt)[27] = calloc(n, sizeof(int[27]));
    int* queue = (int*)malloc(n * sizeof(int));
    int* vis = (int*)calloc(n, sizeof(int));
    int head = 0, tail = 0;
    queue[tail++] = 0; vis[0] = 1;
    while (head < tail) {
        int u = queue[head++];
        for (int e = adjHead[u]; e != -1; e = adjNext[e]) {
            int v = adjTo[e], w = adjW[e];
            if (!vis[v]) {
                vis[v] = 1; depth[v] = depth[u] + 1; parent[0][v] = u;
                memcpy(wCnt[v], wCnt[u], 27 * sizeof(int));
                wCnt[v][w]++; queue[tail++] = v;
            }
        }
    }
    for (int j = 1; j < LOG; j++)
        for (int i = 0; i < n; i++)
            if (parent[j-1][i] != -1) parent[j][i] = parent[j-1][parent[j-1][i]];

    *returnSize = queriesSize;
    int* result = (int*)malloc(queriesSize * sizeof(int));
    for (int q = 0; q < queriesSize; q++) {
        int u = queries[q][0], v = queries[q][1];
        int a = u, b = v;
        if (depth[u] < depth[v]) { int t = u; u = v; v = t; }
        int diff = depth[u] - depth[v];
        for (int j = 0; j < LOG; j++) if ((diff >> j) & 1) u = parent[j][u];
        if (u != v) {
            for (int j = LOG-1; j >= 0; j--)
                if (parent[j][u] != parent[j][v]) { u = parent[j][u]; v = parent[j][v]; }
            u = parent[0][u];
        }
        int lca = u;
        int pathLen = depth[a] + depth[b] - 2 * depth[lca];
        int maxW = 0;
        for (int w = 1; w <= 26; w++) {
            int cnt = wCnt[a][w] + wCnt[b][w] - 2 * wCnt[lca][w];
            if (cnt > maxW) maxW = cnt;
        }
        result[q] = pathLen - maxW;
    }
    free(adjHead); free(adjTo); free(adjW); free(adjNext);
    free(depth); free(queue); free(vis); free(wCnt);
    for (int j = 0; j < LOG; j++) free(parent[j]);
    free(parent);
    return result;
}
