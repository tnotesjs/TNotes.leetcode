int par[100001], sz[100001];

int find(int x) {
    while (par[x] != x) { par[x] = par[par[x]]; x = par[x]; }
    return x;
}

void unite(int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return;
    if (sz[px] < sz[py]) { int t = px; px = py; py = t; }
    par[py] = px;
    sz[px] += sz[py];
}

long long countPaths(int n, int** edges, int edgesSize, int* edgesColSize) {
    // 质数筛
    char *isPrime = (char *)malloc(n + 1);
    memset(isPrime, 1, n + 1);
    isPrime[0] = isPrime[1] = 0;
    for (int i = 2; (long long)i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) isPrime[j] = 0;
        }
    }
    // 建邻接表
    int *deg = (int *)calloc(n + 1, sizeof(int));
    for (int i = 0; i < edgesSize; i++) {
        deg[edges[i][0]]++;
        deg[edges[i][1]]++;
    }
    int *start = (int *)malloc((n + 2) * sizeof(int));
    start[0] = 0;
    for (int i = 1; i <= n; i++) start[i] = start[i - 1] + deg[i];
    int *adj = (int *)malloc(2 * edgesSize * sizeof(int));
    int *pos = (int *)calloc(n + 1, sizeof(int));
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        adj[start[u] + pos[u]++] = v;
        adj[start[v] + pos[v]++] = u;
    }
    // 并查集初始化
    for (int i = 0; i <= n; i++) { par[i] = i; sz[i] = 1; }
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        if (!isPrime[u] && !isPrime[v]) unite(u, v);
    }
    // 枚举质数节点统计合法路径
    long long ans = 0;
    for (int p = 1; p <= n; p++) {
        if (!isPrime[p]) continue;
        long long sum = 0;
        for (int k = start[p]; k < start[p] + deg[p]; k++) {
            int nb = adj[k];
            if (isPrime[nb]) continue;
            long long csz = sz[find(nb)];
            ans += sum * csz + csz;
            sum += csz;
        }
    }
    free(isPrime); free(deg); free(start); free(adj); free(pos);
    return ans;
}
