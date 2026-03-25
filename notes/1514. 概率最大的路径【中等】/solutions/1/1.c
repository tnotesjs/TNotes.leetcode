typedef struct { int to; double prob; } Edge;
typedef struct { Edge* data; int size; int cap; } AdjList;

void addEdge(AdjList* adj, int u, int to, double prob) {
    if (adj[u].size == adj[u].cap) {
        adj[u].cap = adj[u].cap ? adj[u].cap * 2 : 4;
        adj[u].data = (Edge*)realloc(adj[u].data, adj[u].cap * sizeof(Edge));
    }
    adj[u].data[adj[u].size++] = (Edge){to, prob};
}

double maxProbability(int n, int** edges, int edgesSize, int* edgesColSize,
                      double* succProb, int succProbSize,
                      int start_node, int end_node) {
    AdjList* adj = (AdjList*)calloc(n, sizeof(AdjList));
    for (int i = 0; i < edgesSize; i++) {
        addEdge(adj, edges[i][0], edges[i][1], succProb[i]);
        addEdge(adj, edges[i][1], edges[i][0], succProb[i]);
    }
    double* prob = (double*)calloc(n, sizeof(double));
    prob[start_node] = 1.0;
    int* queue = (int*)malloc(n * 20 * sizeof(int));
    int head = 0, tail = 0;
    queue[tail++] = start_node;
    while (head < tail) {
        int node = queue[head++];
        for (int i = 0; i < adj[node].size; i++) {
            int next = adj[node].data[i].to;
            double p = adj[node].data[i].prob;
            if (prob[node] * p > prob[next]) {
                prob[next] = prob[node] * p;
                queue[tail++] = next;
            }
        }
    }
    double res = prob[end_node];
    for (int i = 0; i < n; i++) free(adj[i].data);
    free(adj); free(prob); free(queue);
    return res;
}
