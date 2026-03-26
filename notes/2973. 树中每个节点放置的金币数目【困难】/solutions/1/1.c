void mergeVals(int* dst, int* dstSize, int* src, int srcSize) {
    int buf[10], total = 0;
    for (int i = 0; i < *dstSize; i++) buf[total++] = dst[i];
    for (int i = 0; i < srcSize; i++) buf[total++] = src[i];
    for (int i = 1; i < total; i++) {
        int key = buf[i], j = i - 1;
        while (j >= 0 && buf[j] > key) { buf[j + 1] = buf[j]; j--; }
        buf[j + 1] = key;
    }
    if (total <= 5) {
        for (int i = 0; i < total; i++) dst[i] = buf[i];
        *dstSize = total;
    } else {
        dst[0] = buf[0]; dst[1] = buf[1];
        dst[2] = buf[total - 3]; dst[3] = buf[total - 2]; dst[4] = buf[total - 1];
        *dstSize = 5;
    }
}

long long* placedCoins(int** edges, int edgesSize, int* edgesColSize, int* cost, int costSize, int* returnSize) {
    int n = costSize;
    *returnSize = n;
    long long* ans = malloc(n * sizeof(long long));
    int** adj = malloc(n * sizeof(int*));
    int* adjSize = calloc(n, sizeof(int));
    int* adjCap = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) { adj[i] = malloc(4 * sizeof(int)); adjCap[i] = 4; }
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        if (adjSize[u] == adjCap[u]) { adjCap[u] *= 2; adj[u] = realloc(adj[u], adjCap[u] * sizeof(int)); }
        adj[u][adjSize[u]++] = v;
        if (adjSize[v] == adjCap[v]) { adjCap[v] *= 2; adj[v] = realloc(adj[v], adjCap[v] * sizeof(int)); }
        adj[v][adjSize[v]++] = u;
    }
    int* parent = malloc(n * sizeof(int));
    int* order = malloc(n * sizeof(int));
    int* vis = calloc(n, sizeof(int));
    int front = 0, back = 0;
    memset(parent, -1, n * sizeof(int));
    vis[0] = 1;
    order[back++] = 0;
    while (front < back) {
        int u = order[front++];
        for (int i = 0; i < adjSize[u]; i++) {
            int v = adj[u][i];
            if (!vis[v]) { vis[v] = 1; parent[v] = u; order[back++] = v; }
        }
    }
    int (*vals)[5] = malloc(n * sizeof(*vals));
    int* valSz = calloc(n, sizeof(int));
    for (int idx = n - 1; idx >= 0; idx--) {
        int u = order[idx];
        vals[u][0] = cost[u];
        valSz[u] = 1;
        for (int i = 0; i < adjSize[u]; i++) {
            int v = adj[u][i];
            if (v == parent[u]) continue;
            mergeVals(vals[u], &valSz[u], vals[v], valSz[v]);
        }
        int sz = valSz[u];
        if (sz >= 3) {
            long long c1 = (long long)vals[u][sz - 1] * vals[u][sz - 2] * vals[u][sz - 3];
            long long c2 = (long long)vals[u][0] * vals[u][1] * vals[u][sz - 1];
            long long mx = c1 > c2 ? c1 : c2;
            ans[u] = mx > 0 ? mx : 0;
        } else {
            ans[u] = 1;
        }
    }
    for (int i = 0; i < n; i++) free(adj[i]);
    free(adj); free(adjSize); free(adjCap);
    free(parent); free(order); free(vis); free(vals); free(valSz);
    return ans;
}
