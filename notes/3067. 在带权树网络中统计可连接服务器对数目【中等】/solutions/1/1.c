#include <stdlib.h>
#include <string.h>

typedef struct { int to, w; } Edge;
typedef struct { Edge *edges; int size, cap; } AdjList;

void addEdge(AdjList *g, int u, int v, int w) {
    if (g[u].size == g[u].cap) { g[u].cap = g[u].cap ? g[u].cap * 2 : 4; g[u].edges = realloc(g[u].edges, g[u].cap * sizeof(Edge)); }
    g[u].edges[g[u].size++] = (Edge){v, w};
}

int gSignalSpeed;
AdjList *gAdj;

int dfs(int node, int parent, long long dist) {
    int cnt = (dist % gSignalSpeed == 0) ? 1 : 0;
    for (int i = 0; i < gAdj[node].size; i++) {
        Edge e = gAdj[node].edges[i];
        if (e.to != parent) cnt += dfs(e.to, node, dist + e.w);
    }
    return cnt;
}

int* countPairsOfConnectableServers(int** edges, int edgesSize, int* edgesColSize, int signalSpeed, int* returnSize) {
    int n = edgesSize + 1;
    *returnSize = n;
    gAdj = calloc(n, sizeof(AdjList));
    gSignalSpeed = signalSpeed;
    for (int i = 0; i < edgesSize; i++) {
        addEdge(gAdj, edges[i][0], edges[i][1], edges[i][2]);
        addEdge(gAdj, edges[i][1], edges[i][0], edges[i][2]);
    }
    int *res = calloc(n, sizeof(int));
    for (int c = 0; c < n; c++) {
        int prev = 0;
        for (int i = 0; i < gAdj[c].size; i++) {
            int cnt = dfs(gAdj[c].edges[i].to, c, gAdj[c].edges[i].w);
            res[c] += prev * cnt;
            prev += cnt;
        }
    }
    for (int i = 0; i < n; i++) free(gAdj[i].edges);
    free(gAdj);
    return res;
}
