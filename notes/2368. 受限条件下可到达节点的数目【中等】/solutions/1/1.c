int reachableNodes(int n, int** edges, int edgesSize, int* edgesColSize, int* restricted, int restrictedSize) {
    int* head = (int*)malloc(n * sizeof(int));
    int* to = (int*)malloc(edgesSize * 2 * sizeof(int));
    int* nxt = (int*)malloc(edgesSize * 2 * sizeof(int));
    memset(head, -1, n * sizeof(int));
    int idx = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        to[idx] = v; nxt[idx] = head[u]; head[u] = idx++;
        to[idx] = u; nxt[idx] = head[v]; head[v] = idx++;
    }
    char* blocked = (char*)calloc(n, 1);
    for (int i = 0; i < restrictedSize; i++) blocked[restricted[i]] = 1;
    int* queue = (int*)malloc(n * sizeof(int));
    int front = 0, back = 0;
    queue[back++] = 0;
    blocked[0] = 1;
    int count = 0;
    while (front < back) {
        int node = queue[front++];
        count++;
        for (int e = head[node]; e != -1; e = nxt[e]) {
            if (!blocked[to[e]]) {
                blocked[to[e]] = 1;
                queue[back++] = to[e];
            }
        }
    }
    free(head); free(to); free(nxt); free(blocked); free(queue);
    return count;
}
