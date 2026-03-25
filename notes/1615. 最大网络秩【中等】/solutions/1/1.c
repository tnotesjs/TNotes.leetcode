int maximalNetworkRank(int n, int** roads, int roadsSize, int* roadsColSize) {
    int degree[100] = {0};
    int conn[100][100] = {{0}};
    for (int i = 0; i < roadsSize; i++) {
        int a = roads[i][0], b = roads[i][1];
        degree[a]++; degree[b]++;
        conn[a][b] = conn[b][a] = 1;
    }
    int res = 0;
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++) {
            int rank = degree[i] + degree[j] - conn[i][j];
            if (rank > res) res = rank;
        }
    return res;
}
