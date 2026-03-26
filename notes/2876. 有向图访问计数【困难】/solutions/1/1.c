int* countVisitedNodes(int* edges, int edgesSize, int* returnSize) {
    int n = edgesSize;
    *returnSize = n;
    int *ans = (int *)calloc(n, sizeof(int));
    int *inDeg = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) inDeg[edges[i]]++;
    // 拓扑排序去除尾部
    int *queue = (int *)malloc(n * sizeof(int));
    int head = 0, tail = 0;
    char *visited = (char *)calloc(n, 1);
    for (int i = 0; i < n; i++) {
        if (inDeg[i] == 0) queue[tail++] = i;
    }
    while (head < tail) {
        int u = queue[head++];
        visited[u] = 1;
        if (--inDeg[edges[u]] == 0) queue[tail++] = edges[u];
    }
    // 处理环
    for (int i = 0; i < n; i++) {
        if (visited[i]) continue;
        int len = 0, u = i;
        do { visited[u] = 1; u = edges[u]; len++; } while (u != i);
        u = i;
        do { ans[u] = len; u = edges[u]; } while (u != i);
    }
    // 处理尾部
    int *path = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (ans[i] > 0) continue;
        int cnt = 0, u = i;
        while (ans[u] == 0) { path[cnt++] = u; u = edges[u]; }
        for (int j = cnt - 1; j >= 0; j--) {
            ans[path[j]] = ans[u] + (cnt - j);
        }
    }
    free(inDeg); free(queue); free(visited); free(path);
    return ans;
}
