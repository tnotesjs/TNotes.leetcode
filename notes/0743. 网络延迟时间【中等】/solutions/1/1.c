#define INF 0x3f3f3f3f

int networkDelayTime(int** times, int timesSize, int* timesColSize, int n, int k) {
    int* dist = (int*)malloc(sizeof(int) * (n + 1));
    for (int i = 0; i <= n; i++) dist[i] = INF;
    dist[k] = 0;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < timesSize; j++) {
            int u = times[j][0], v = times[j][1], w = times[j][2];
            if (dist[u] != INF && dist[u] + w < dist[v])
                dist[v] = dist[u] + w;
        }
    }
    int res = 0;
    for (int i = 1; i <= n; i++) {
        if (dist[i] == INF) { free(dist); return -1; }
        if (dist[i] > res) res = dist[i];
    }
    free(dist);
    return res;
}
