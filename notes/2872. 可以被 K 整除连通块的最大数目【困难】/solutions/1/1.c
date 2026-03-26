int maxKDivisibleComponents(int n, int** edges, int edgesSize, int* edgesColSize, int* values, int valuesSize, int k) {
    // 建邻接表
    int *deg = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < edgesSize; i++) {
        deg[edges[i][0]]++;
        deg[edges[i][1]]++;
    }
    int *start = (int *)malloc((n + 1) * sizeof(int));
    start[0] = 0;
    for (int i = 0; i < n; i++) start[i + 1] = start[i] + deg[i];
    int *adj = (int *)malloc(2 * edgesSize * sizeof(int));
    int *pos = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        adj[start[u] + pos[u]++] = v;
        adj[start[v] + pos[v]++] = u;
    }
    // BFS 拓扑排序
    int *order = (int *)malloc(n * sizeof(int));
    int *parent = (int *)malloc(n * sizeof(int));
    char *visited = (char *)calloc(n, 1);
    int head = 0, tail = 0;
    order[tail++] = 0;
    visited[0] = 1;
    parent[0] = -1;
    while (head < tail) {
        int u = order[head++];
        for (int j = start[u]; j < start[u + 1]; j++) {
            int v = adj[j];
            if (!visited[v]) {
                visited[v] = 1;
                parent[v] = u;
                order[tail++] = v;
            }
        }
    }
    // 从叶子到根累加余数
    long long *rem = (long long *)calloc(n, sizeof(long long));
    int ans = 0;
    for (int i = n - 1; i >= 0; i--) {
        int u = order[i];
        rem[u] = (rem[u] + values[u] % k) % k;
        if (rem[u] == 0) {
            ans++;
        } else if (parent[u] != -1) {
            rem[parent[u]] = (rem[parent[u]] + rem[u]) % k;
        }
    }
    free(deg); free(start); free(adj); free(pos);
    free(order); free(parent); free(visited); free(rem);
    return ans;
}
