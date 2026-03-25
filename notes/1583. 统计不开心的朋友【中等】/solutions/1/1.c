int unhappyFriends(int n, int** preferences, int preferencesSize, int* preferencesColSize,
                   int** pairs, int pairsSize, int* pairsColSize) {
    int** rnk = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        rnk[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n - 1; j++)
            rnk[i][preferences[i][j]] = j;
    }
    int* partner = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < pairsSize; i++) {
        partner[pairs[i][0]] = pairs[i][1];
        partner[pairs[i][1]] = pairs[i][0];
    }
    int res = 0;
    for (int x = 0; x < n; x++) {
        int y = partner[x];
        for (int i = 0; i < n - 1; i++) {
            int u = preferences[x][i];
            if (u == y) break;
            int v = partner[u];
            if (rnk[u][x] < rnk[u][v]) { res++; break; }
        }
    }
    for (int i = 0; i < n; i++) free(rnk[i]);
    free(rnk); free(partner);
    return res;
}
