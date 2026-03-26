long long minimumCost(char* source, char* target, char* original, int originalSize, char* changed, int changedSize, int* cost, int costSize) {
    long long dist[26][26];
    for (int i = 0; i < 26; i++)
        for (int j = 0; j < 26; j++)
            dist[i][j] = i == j ? 0 : 1e18;
    for (int i = 0; i < costSize; i++) {
        int u = original[i] - 'a', v = changed[i] - 'a';
        if (cost[i] < dist[u][v]) dist[u][v] = cost[i];
    }
    for (int k = 0; k < 26; k++)
        for (int i = 0; i < 26; i++)
            for (int j = 0; j < 26; j++)
                if (dist[i][k] + dist[k][j] < dist[i][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
    long long ans = 0;
    int n = strlen(source);
    for (int i = 0; i < n; i++) {
        int u = source[i] - 'a', v = target[i] - 'a';
        if (dist[u][v] >= 1e18) return -1;
        ans += dist[u][v];
    }
    return ans;
}
