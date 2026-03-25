int* gardenNoAdj(int n, int** paths, int pathsSize, int* pathsColSize, int* returnSize) {
    int* head = calloc(n + 1, sizeof(int));
    int* to = malloc(pathsSize * 2 * sizeof(int));
    int* next = malloc(pathsSize * 2 * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < pathsSize; i++) {
        int u = paths[i][0], v = paths[i][1];
        to[cnt] = v; next[cnt] = head[u]; head[u] = cnt + 1; cnt++;
        to[cnt] = u; next[cnt] = head[v]; head[v] = cnt + 1; cnt++;
    }
    int* res = calloc(n, sizeof(int));
    for (int i = 1; i <= n; i++) {
        int used[5] = {0};
        for (int e = head[i]; e; e = next[e - 1]) {
            if (res[to[e - 1] - 1] > 0) used[res[to[e - 1] - 1]] = 1;
        }
        for (int c = 1; c <= 4; c++) {
            if (!used[c]) { res[i - 1] = c; break; }
        }
    }
    free(head); free(to); free(next);
    *returnSize = n;
    return res;
}
