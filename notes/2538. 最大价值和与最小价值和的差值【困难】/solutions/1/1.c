typedef struct { int to, next; } Edge;

long long maxOutput(int n, int** edges, int edgesSize, int* edgesColSize, int* price, int priceSize) {
    Edge* e = (Edge*)malloc(2 * (n - 1) * sizeof(Edge));
    int* head = (int*)malloc(n * sizeof(int));
    memset(head, -1, n * sizeof(int));
    int idx = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        e[idx] = (Edge){v, head[u]}; head[u] = idx++;
        e[idx] = (Edge){u, head[v]}; head[v] = idx++;
    }
    long long ans = 0;
    // 迭代 DFS
    int* stk = (int*)malloc(n * sizeof(int));
    int* par = (int*)malloc(n * sizeof(int));
    int* order = (int*)malloc(n * sizeof(int));
    long long* wl = (long long*)calloc(n, sizeof(long long)); // with leaf
    long long* wt = (long long*)calloc(n, sizeof(long long)); // without leaf
    int top = 0, cnt = 0;
    par[0] = -1; stk[top++] = 0;
    while (top > 0) {
        int u = stk[--top];
        order[cnt++] = u;
        for (int i = head[u]; i != -1; i = e[i].next) {
            int v = e[i].to;
            if (v != par[u]) { par[v] = u; stk[top++] = v; }
        }
    }
    for (int i = 0; i < n; i++) { wl[i] = price[i]; wt[i] = 0; }
    for (int i = cnt - 1; i >= 0; i--) {
        int u = order[i];
        for (int j = head[u]; j != -1; j = e[j].next) {
            int v = e[j].to;
            if (v == par[u]) continue;
            long long a = wl[u] + wt[v], b = wt[u] + wl[v];
            if (a > ans) ans = a;
            if (b > ans) ans = b;
            if (price[u] + wl[v] > wl[u]) wl[u] = price[u] + wl[v];
            if (price[u] + wt[v] > wt[u]) wt[u] = price[u] + wt[v];
        }
    }
    free(e); free(head); free(stk); free(par); free(order); free(wl); free(wt);
    return ans;
}
