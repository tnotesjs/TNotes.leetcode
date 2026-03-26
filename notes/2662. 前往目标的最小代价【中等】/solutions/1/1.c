int minimumCost(int* start, int startSize, int* target, int targetSize, int** specialRoads, int specialRoadsSize, int* specialRoadsColSize) {
    int n = specialRoadsSize + 2;
    int* px = (int*)malloc(n * sizeof(int));
    int* py = (int*)malloc(n * sizeof(int));
    px[0] = start[0]; py[0] = start[1];
    px[1] = target[0]; py[1] = target[1];
    for (int i = 0; i < specialRoadsSize; i++) {
        px[i + 2] = specialRoads[i][2];
        py[i + 2] = specialRoads[i][3];
    }

    long long* dist = (long long*)malloc(n * sizeof(long long));
    int* visited = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) dist[i] = 2e14;
    dist[0] = 0;

    for (int iter = 0; iter < n; iter++) {
        int minIdx = -1;
        long long minDist = 2e14;
        for (int i = 0; i < n; i++) {
            if (!visited[i] && dist[i] < minDist) {
                minDist = dist[i];
                minIdx = i;
            }
        }
        if (minIdx == -1) break;
        if (minIdx == 1) {
            int ans = (int)dist[1];
            free(px); free(py); free(dist); free(visited);
            return ans;
        }
        visited[minIdx] = 1;
        int mx = px[minIdx], my = py[minIdx];

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                long long d = minDist + abs(px[i] - mx) + abs(py[i] - my);
                if (d < dist[i]) dist[i] = d;
            }
        }
        for (int i = 0; i < specialRoadsSize; i++) {
            int idx = i + 2;
            if (!visited[idx]) {
                long long d = minDist + abs(specialRoads[i][0] - mx) + abs(specialRoads[i][1] - my) + specialRoads[i][4];
                if (d < dist[idx]) dist[idx] = d;
            }
        }
    }
    int ans = (int)dist[1];
    free(px); free(py); free(dist); free(visited);
    return ans;
}
