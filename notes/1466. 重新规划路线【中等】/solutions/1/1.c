typedef struct { int to; int cost; } Edge;
typedef struct { Edge* data; int size; int cap; } AdjList;

void addE(AdjList* adj, int u, int to, int cost) {
    if (adj[u].size == adj[u].cap) {
        adj[u].cap = adj[u].cap ? adj[u].cap * 2 : 4;
        adj[u].data = (Edge*)realloc(adj[u].data, adj[u].cap * sizeof(Edge));
    }
    adj[u].data[adj[u].size++] = (Edge){to, cost};
}

int minReorder(int n, int** connections, int connectionsSize, int* connectionsColSize) {
    AdjList* adj = (AdjList*)calloc(n, sizeof(AdjList));
    for (int i = 0; i < connectionsSize; i++) {
        addE(adj, connections[i][0], connections[i][1], 1);
        addE(adj, connections[i][1], connections[i][0], 0);
    }
    int* queue = (int*)malloc(n * sizeof(int));
    int* visited = (int*)calloc(n, sizeof(int));
    int head = 0, tail = 0, count = 0;
    queue[tail++] = 0; visited[0] = 1;
    while (head < tail) {
        int node = queue[head++];
        for (int i = 0; i < adj[node].size; i++) {
            int next = adj[node].data[i].to;
            int cost = adj[node].data[i].cost;
            if (visited[next]) continue;
            visited[next] = 1;
            count += cost;
            queue[tail++] = next;
        }
    }
    for (int i = 0; i < n; i++) free(adj[i].data);
    free(adj); free(queue); free(visited);
    return count;
}
