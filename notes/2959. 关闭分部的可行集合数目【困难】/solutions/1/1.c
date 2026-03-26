int numberOfSets(int n, int maxDistance, int** roads, int roadsSize, int* roadsColSize) {
    int ans = 0;
    for (int mask = 0; mask < (1 << n); mask++) {
        int dist[10][10];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                dist[i][j] = i == j ? 0 : 1e9;
        for (int r = 0; r < roadsSize; r++) {
            int u = roads[r][0], v = roads[r][1], w = roads[r][2];
            if ((mask >> u & 1) && (mask >> v & 1)) {
                if (w < dist[u][v]) dist[u][v] = w;
                if (w < dist[v][u]) dist[v][u] = w;
            }
        }
        for (int k = 0; k < n; k++) {
            if (!(mask >> k & 1)) continue;
            for (int i = 0; i < n; i++) {
                if (!(mask >> i & 1)) continue;
                for (int j = 0; j < n; j++) {
                    if (!(mask >> j & 1)) continue;
                    if (dist[i][k] + dist[k][j] < dist[i][j])
                        dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
        int ok = 1;
        for (int i = 0; i < n && ok; i++) {
            if (!(mask >> i & 1)) continue;
            for (int j = i + 1; j < n && ok; j++) {
                if (!(mask >> j & 1)) continue;
                if (dist[i][j] > maxDistance) ok = 0;
            }
        }
        ans += ok;
    }
    return ans;
}
