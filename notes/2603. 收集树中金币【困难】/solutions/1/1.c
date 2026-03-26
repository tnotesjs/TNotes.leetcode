int collectTheCoins(int *coins, int coinsSize, int **edges, int edgesSize, int *edgesColSize) {
    int n = coinsSize;
    int *deg = calloc(n, sizeof(int));
    // 用链表存图
    int *head = malloc(n * sizeof(int));
    int *nxt = malloc(2 * edgesSize * sizeof(int));
    int *to = malloc(2 * edgesSize * sizeof(int));
    int *removed = calloc(2 * edgesSize, sizeof(int));
    memset(head, -1, n * sizeof(int));
    int idx = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        to[idx] = v; nxt[idx] = head[u]; head[u] = idx++;
        to[idx] = u; nxt[idx] = head[v]; head[v] = idx++;
        deg[u]++; deg[v]++;
    }
    int *queue = malloc(n * sizeof(int));
    int front = 0, back = 0;
    // 第一轮：删除不含金币的叶子
    for (int i = 0; i < n; i++) {
        if (deg[i] == 1 && coins[i] == 0) queue[back++] = i;
    }
    while (front < back) {
        int u = queue[front++];
        for (int e = head[u]; e != -1; e = nxt[e]) {
            if (removed[e]) continue;
            removed[e] = removed[e ^ 1] = 1;
            deg[to[e]]--;
            if (deg[to[e]] == 1 && coins[to[e]] == 0) queue[back++] = to[e];
        }
        deg[u] = 0;
    }
    // 第二轮：剥离两层
    for (int t = 0; t < 2; t++) {
        front = back = 0;
        for (int i = 0; i < n; i++) {
            if (deg[i] == 1) queue[back++] = i;
        }
        for (int q = 0; q < back; q++) {
            int u = queue[q];
            for (int e = head[u]; e != -1; e = nxt[e]) {
                if (removed[e]) continue;
                removed[e] = removed[e ^ 1] = 1;
                deg[to[e]]--;
            }
            deg[u] = 0;
        }
    }
    int ans = 0;
    for (int i = 0; i < 2 * edgesSize; i += 2) {
        if (!removed[i]) ans += 2;
    }
    free(deg); free(head); free(nxt); free(to); free(removed); free(queue);
    return ans;
}
