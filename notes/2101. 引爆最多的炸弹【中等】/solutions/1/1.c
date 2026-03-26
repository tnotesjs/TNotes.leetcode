int maximumDetonation(int** bombs, int bombsSize, int* bombsColSize) {
    // 建邻接表
    int** adj = (int**)malloc(bombsSize * sizeof(int*));
    int* adjSize = (int*)calloc(bombsSize, sizeof(int));
    for (int i = 0; i < bombsSize; i++) {
        adj[i] = (int*)malloc(bombsSize * sizeof(int));
    }
    for (int i = 0; i < bombsSize; i++) {
        for (int j = 0; j < bombsSize; j++) {
            if (i == j) continue;
            long long dx = bombs[i][0] - bombs[j][0];
            long long dy = bombs[i][1] - bombs[j][1];
            long long r = bombs[i][2];
            if (dx * dx + dy * dy <= r * r) {
                adj[i][adjSize[i]++] = j;
            }
        }
    }
    int ans = 0;
    int* queue = (int*)malloc(bombsSize * sizeof(int));
    bool* visited = (bool*)malloc(bombsSize * sizeof(bool));
    for (int i = 0; i < bombsSize; i++) {
        memset(visited, false, bombsSize * sizeof(bool));
        visited[i] = true;
        queue[0] = i;
        int front = 0, rear = 1, cnt = 1;
        while (front < rear) {
            int cur = queue[front++];
            for (int k = 0; k < adjSize[cur]; k++) {
                int next = adj[cur][k];
                if (!visited[next]) {
                    visited[next] = true;
                    cnt++;
                    queue[rear++] = next;
                }
            }
        }
        if (cnt > ans) ans = cnt;
    }
    for (int i = 0; i < bombsSize; i++) free(adj[i]);
    free(adj); free(adjSize); free(queue); free(visited);
    return ans;
}
