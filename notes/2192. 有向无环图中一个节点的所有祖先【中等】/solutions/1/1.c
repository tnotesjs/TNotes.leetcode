int** getAncestors(int n, int** edges, int edgesSize, int* edgesColSize,
                   int* returnSize, int** returnColumnSizes) {
    int **adj = (int **)malloc(n * sizeof(int *));
    int *adjCnt = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < edgesSize; i++) adjCnt[edges[i][0]]++;
    int *idx = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) adj[i] = (int *)malloc((adjCnt[i] + 1) * sizeof(int));
    for (int i = 0; i < edgesSize; i++) adj[edges[i][0]][idx[edges[i][0]]++] = edges[i][1];

    int **flag = (int **)malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) flag[i] = (int *)calloc(n, sizeof(int));

    int *queue = (int *)malloc(n * sizeof(int));
    int *vis = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) {
        memset(vis, 0, n * sizeof(int));
        int front = 0, back = 0;
        queue[back++] = i;
        vis[i] = 1;
        while (front < back) {
            int u = queue[front++];
            for (int j = 0; j < adjCnt[u]; j++) {
                int v = adj[u][j];
                if (!vis[v]) {
                    vis[v] = 1;
                    flag[v][i] = 1;
                    queue[back++] = v;
                }
            }
        }
    }

    *returnSize = n;
    int **res = (int **)malloc(n * sizeof(int *));
    *returnColumnSizes = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        int cnt = 0;
        for (int j = 0; j < n; j++) if (flag[i][j]) cnt++;
        res[i] = (int *)malloc((cnt + 1) * sizeof(int));
        (*returnColumnSizes)[i] = cnt;
        int k = 0;
        for (int j = 0; j < n; j++) if (flag[i][j]) res[i][k++] = j;
    }

    for (int i = 0; i < n; i++) { free(adj[i]); free(flag[i]); }
    free(adj); free(adjCnt); free(idx); free(flag); free(queue); free(vis);
    return res;
}
