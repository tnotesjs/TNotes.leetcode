#include <stdlib.h>

int minCostConnectPoints(int** points, int pointsSize, int* pointsColSize) {
    int n = pointsSize;
    int* dist = (int*)malloc(n * sizeof(int));
    int* visited = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) dist[i] = 0x7fffffff;
    dist[0] = 0;
    int total = 0;
    for (int i = 0; i < n; i++) {
        int u = -1;
        for (int j = 0; j < n; j++)
            if (!visited[j] && (u == -1 || dist[j] < dist[u])) u = j;
        visited[u] = 1;
        total += dist[u];
        for (int v = 0; v < n; v++) {
            if (visited[v]) continue;
            int d = abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1]);
            if (d < dist[v]) dist[v] = d;
        }
    }
    free(dist); free(visited);
    return total;
}
