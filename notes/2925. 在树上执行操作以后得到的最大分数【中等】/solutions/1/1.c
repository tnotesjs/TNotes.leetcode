long long maximumScoreAfterOperations(int** edges, int edgesSize, int* edgesColSize, int* values, int valuesSize) {
    int n = valuesSize;
    int *head = malloc(n * sizeof(int));
    memset(head, -1, n * sizeof(int));
    int *to = malloc(2 * edgesSize * sizeof(int));
    int *nxt = malloc(2 * edgesSize * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        to[cnt] = v; nxt[cnt] = head[u]; head[u] = cnt++;
        to[cnt] = u; nxt[cnt] = head[v]; head[v] = cnt++;
    }
    long long totalSum = 0;
    for (int i = 0; i < n; i++) totalSum += values[i];
    int *order = malloc(n * sizeof(int));
    int *par = malloc(n * sizeof(int));
    memset(par, -1, n * sizeof(int));
    int *stk = malloc(n * sizeof(int));
    int *vis = calloc(n, sizeof(int));
    int top = 0, oidx = 0;
    stk[top++] = 0; vis[0] = 1;
    while (top > 0) {
        int u = stk[--top];
        order[oidx++] = u;
        for (int e = head[u]; e != -1; e = nxt[e]) {
            int v = to[e];
            if (!vis[v]) { vis[v] = 1; par[v] = u; stk[top++] = v; }
        }
    }
    long long *minKeep = malloc(n * sizeof(long long));
    for (int i = oidx - 1; i >= 0; i--) {
        int node = order[i];
        int isLeaf = 1;
        long long childSum = 0;
        for (int e = head[node]; e != -1; e = nxt[e]) {
            int v = to[e];
            if (v != par[node]) { isLeaf = 0; childSum += minKeep[v]; }
        }
        minKeep[node] = isLeaf ? values[node] : ((long long)values[node] < childSum ? values[node] : childSum);
    }
    long long ans = totalSum - minKeep[0];
    free(head); free(to); free(nxt); free(order);
    free(par); free(stk); free(vis); free(minKeep);
    return ans;
}
