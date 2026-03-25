bool possibleBipartition(int n, int** dislikes, int dislikesSize, int* dislikesColSize) {
    int** graph = (int**)malloc(sizeof(int*) * (n + 1));
    int* gSize = (int*)calloc(n + 1, sizeof(int));
    int* gCap = (int*)malloc(sizeof(int) * (n + 1));
    for (int i = 0; i <= n; i++) { graph[i] = (int*)malloc(sizeof(int) * 4); gCap[i] = 4; }
    for (int i = 0; i < dislikesSize; i++) {
        int a = dislikes[i][0], b = dislikes[i][1];
        if (gSize[a] == gCap[a]) { gCap[a] *= 2; graph[a] = realloc(graph[a], sizeof(int) * gCap[a]); }
        graph[a][gSize[a]++] = b;
        if (gSize[b] == gCap[b]) { gCap[b] *= 2; graph[b] = realloc(graph[b], sizeof(int) * gCap[b]); }
        graph[b][gSize[b]++] = a;
    }
    int* color = (int*)calloc(n + 1, sizeof(int));
    int* queue = (int*)malloc(sizeof(int) * (n + 1));
    bool res = true;
    for (int i = 1; i <= n && res; i++) {
        if (color[i] != 0) continue;
        int front = 0, back = 0;
        queue[back++] = i; color[i] = 1;
        while (front < back && res) {
            int u = queue[front++];
            for (int j = 0; j < gSize[u]; j++) {
                int v = graph[u][j];
                if (color[v] == 0) { color[v] = -color[u]; queue[back++] = v; }
                else if (color[v] == color[u]) { res = false; break; }
            }
        }
    }
    for (int i = 0; i <= n; i++) free(graph[i]);
    free(graph); free(gSize); free(gCap); free(color); free(queue);
    return res;
}
