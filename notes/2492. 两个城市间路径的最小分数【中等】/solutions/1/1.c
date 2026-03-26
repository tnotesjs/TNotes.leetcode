int minScore(int n, int** roads, int roadsSize, int* roadsColSize) {
    int *head = (int *)malloc((n + 1) * sizeof(int));
    int *to = (int *)malloc(roadsSize * 4 * sizeof(int));
    int *dist = (int *)malloc(roadsSize * 4 * sizeof(int));
    int *nxt = (int *)malloc(roadsSize * 4 * sizeof(int));
    memset(head, -1, (n + 1) * sizeof(int));
    int idx = 0;
    for (int i = 0; i < roadsSize; i++) {
        int u = roads[i][0], v = roads[i][1], d = roads[i][2];
        to[idx] = v; dist[idx] = d; nxt[idx] = head[u]; head[u] = idx++;
        to[idx] = u; dist[idx] = d; nxt[idx] = head[v]; head[v] = idx++;
    }
    int *queue = (int *)malloc((n + 1) * sizeof(int));
    int *visited = (int *)calloc(n + 1, sizeof(int));
    queue[0] = 1; visited[1] = 1;
    int front = 0, back = 1;
    int ans = 2147483647;
    while (front < back) {
        int u = queue[front++];
        for (int i = head[u]; i != -1; i = nxt[i]) {
            if (dist[i] < ans) ans = dist[i];
            if (!visited[to[i]]) {
                visited[to[i]] = 1;
                queue[back++] = to[i];
            }
        }
    }
    free(head); free(to); free(dist); free(nxt); free(queue); free(visited);
    return ans;
}
