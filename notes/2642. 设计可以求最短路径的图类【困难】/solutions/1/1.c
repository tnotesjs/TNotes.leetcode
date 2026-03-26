typedef struct {
    int n;
    int adj[100][100]; // 邻接矩阵，0 表示无边
} Graph;

Graph* graphCreate(int n, int** edges, int edgesSize, int* edgesColSize) {
    Graph* g = (Graph*)malloc(sizeof(Graph));
    g->n = n;
    memset(g->adj, 0, sizeof(g->adj));
    for (int i = 0; i < edgesSize; i++) {
        g->adj[edges[i][0]][edges[i][1]] = edges[i][2];
    }
    return g;
}

void graphAddEdge(Graph* obj, int* edge, int edgeSize) {
    obj->adj[edge[0]][edge[1]] = edge[2];
}

int graphShortestPath(Graph* obj, int node1, int node2) {
    int n = obj->n;
    int dist[100];
    bool visited[100];
    memset(visited, false, sizeof(visited));
    for (int i = 0; i < n; i++) dist[i] = INT_MAX;
    dist[node1] = 0;
    for (int i = 0; i < n; i++) {
        int u = -1;
        for (int v = 0; v < n; v++) {
            if (!visited[v] && (u == -1 || dist[v] < dist[u])) u = v;
        }
        if (u == -1 || dist[u] == INT_MAX) break;
        visited[u] = true;
        for (int v = 0; v < n; v++) {
            if (obj->adj[u][v] > 0 && (long long)dist[u] + obj->adj[u][v] < dist[v]) {
                dist[v] = dist[u] + obj->adj[u][v];
            }
        }
    }
    return dist[node2] == INT_MAX ? -1 : dist[node2];
}

void graphFree(Graph* obj) {
    free(obj);
}
