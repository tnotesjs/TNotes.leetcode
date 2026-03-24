bool isBipartite(int** graph, int graphSize, int* graphColSize) {
    int* color = (int*)calloc(graphSize, sizeof(int));
    int* queue = (int*)malloc(sizeof(int) * graphSize);
    bool res = true;
    for (int i = 0; i < graphSize && res; i++) {
        if (color[i] != 0) continue;
        int front = 0, back = 0;
        queue[back++] = i;
        color[i] = 1;
        while (front < back && res) {
            int u = queue[front++];
            for (int j = 0; j < graphColSize[u]; j++) {
                int v = graph[u][j];
                if (color[v] == 0) { color[v] = -color[u]; queue[back++] = v; }
                else if (color[v] == color[u]) { res = false; break; }
            }
        }
    }
    free(color); free(queue);
    return res;
}
