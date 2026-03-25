typedef struct { int* data; int size; int cap; } List;
void addEdge(List* adj, int u, int v) {
    if (adj[u].size == adj[u].cap) {
        adj[u].cap = adj[u].cap ? adj[u].cap * 2 : 4;
        adj[u].data = (int*)realloc(adj[u].data, adj[u].cap * sizeof(int));
    }
    adj[u].data[adj[u].size++] = v;
}

int dfs(List* adj, bool* hasApple, int node, int parent) {
    int time = 0;
    for (int i = 0; i < adj[node].size; i++) {
        int child = adj[node].data[i];
        if (child == parent) continue;
        int childTime = dfs(adj, hasApple, child, node);
        if (childTime > 0 || hasApple[child]) time += childTime + 2;
    }
    return time;
}

int minTime(int n, int** edges, int edgesSize, int* edgesColSize, bool* hasApple, int hasAppleSize) {
    List* adj = (List*)calloc(n, sizeof(List));
    for (int i = 0; i < edgesSize; i++) {
        addEdge(adj, edges[i][0], edges[i][1]);
        addEdge(adj, edges[i][1], edges[i][0]);
    }
    int res = dfs(adj, hasApple, 0, -1);
    for (int i = 0; i < n; i++) free(adj[i].data);
    free(adj);
    return res;
}
