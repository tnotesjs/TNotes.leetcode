int maximumPoints(int** edges, int edgesSize, int* edgesColSize, int* coins, int coinsSize, int k) {
    int n = coinsSize;
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
    int MAX_J = 14;
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
    long long (*memo)[15] = malloc(n * sizeof(*memo));
    for (int idx = oidx - 1; idx >= 0; idx--) {
        int node = order[idx];
        for (int j = 0; j <= MAX_J; j++) {
            int val = coins[node] >> j;
            long long opt1 = val - k;
            long long opt2 = val >> 1;
            for (int e = head[node]; e != -1; e = nxt[e]) {
                int v = to[e];
                if (v == par[node]) continue;
                opt1 += memo[v][j];
                opt2 += (j + 1 <= MAX_J ? memo[v][j + 1] : 0);
            }
            memo[node][j] = opt1 > opt2 ? opt1 : opt2;
        }
    }
    int ans = (int)memo[0][0];
    free(head); free(to); free(nxt); free(order);
    free(par); free(stk); free(vis); free(memo);
    return ans;
}
