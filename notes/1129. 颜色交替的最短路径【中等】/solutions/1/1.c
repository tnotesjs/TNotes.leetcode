#include <string.h>
#include <limits.h>

int* shortestAlternatingPaths(int n, int** redEdges, int redEdgesSize, int* redEdgesColSize, int** blueEdges, int blueEdgesSize, int* blueEdgesColSize, int* returnSize) {
    int adj[2][n][n];
    memset(adj, 0, sizeof(adj));
    for (int i = 0; i < redEdgesSize; i++) adj[0][redEdges[i][0]][redEdges[i][1]] = 1;
    for (int i = 0; i < blueEdgesSize; i++) adj[1][blueEdges[i][0]][blueEdges[i][1]] = 1;
    int dist[2][n];
    for (int c = 0; c < 2; c++) for (int i = 0; i < n; i++) dist[c][i] = INT_MAX;
    dist[0][0] = dist[1][0] = 0;
    int queue[2 * n * n][2], front = 0, back = 0;
    queue[back][0] = 0; queue[back][1] = 0; back++;
    queue[back][0] = 0; queue[back][1] = 1; back++;
    while (front < back) {
        int node = queue[front][0], color = queue[front][1]; front++;
        int next = 1 - color;
        for (int nei = 0; nei < n; nei++) {
            if (adj[next][node][nei] && dist[next][nei] > dist[color][node] + 1) {
                dist[next][nei] = dist[color][node] + 1;
                queue[back][0] = nei; queue[back][1] = next; back++;
            }
        }
    }
    int* res = malloc(n * sizeof(int));
    *returnSize = n;
    for (int i = 0; i < n; i++) {
        int d = dist[0][i] < dist[1][i] ? dist[0][i] : dist[1][i];
        res[i] = d == INT_MAX ? -1 : d;
    }
    return res;
}
