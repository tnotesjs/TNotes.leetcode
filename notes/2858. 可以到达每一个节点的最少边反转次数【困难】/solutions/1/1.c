int* minEdgeReversals(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    int* head = (int*)malloc(n * sizeof(int));
    memset(head, -1, n * sizeof(int));
    int* to = (int*)malloc(4 * n * sizeof(int));
    int* cost = (int*)malloc(4 * n * sizeof(int));
    int* nxt = (int*)malloc(4 * n * sizeof(int));
    int idx = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        to[idx]=v; cost[idx]=0; nxt[idx]=head[u]; head[u]=idx++;
        to[idx]=u; cost[idx]=1; nxt[idx]=head[v]; head[v]=idx++;
    }
    int* ans = (int*)malloc(n * sizeof(int));
    int* par = (int*)malloc(n * sizeof(int));
    int* pcost = (int*)malloc(n * sizeof(int));
    int* order = (int*)malloc(n * sizeof(int));
    int* vis = (int*)calloc(n, sizeof(int));
    int front = 0, back = 0;
    order[back++] = 0; vis[0] = 1; par[0] = -1;
    int cost0 = 0;
    while (front < back) {
        int u = order[front++];
        for (int e = head[u]; e != -1; e = nxt[e]) {
            int v = to[e];
            if (!vis[v]) { vis[v]=1; par[v]=u; pcost[v]=cost[e]; cost0+=cost[e]; order[back++]=v; }
        }
    }
    ans[0] = cost0;
    for (int i = 1; i < n; i++) { int u = order[i]; ans[u] = ans[par[u]] + (pcost[u]==0?1:-1); }
    free(head); free(to); free(cost); free(nxt); free(par); free(pcost); free(order); free(vis);
    *returnSize = n;
    return ans;
}
