#include <stdlib.h>
#include <string.h>

#define MOD1786 1000000007

typedef struct { int to, w; } Edge1786;
typedef struct { int node; long long dist; } PQNode1786;

int countRestrictedPaths(int n, int** edges, int edgesSize, int* edgesColSize) {
  // 建图
  int* head = (int*)malloc((n + 1) * sizeof(int));
  int* nxt = (int*)malloc(edgesSize * 2 * sizeof(int));
  int* to = (int*)malloc(edgesSize * 2 * sizeof(int));
  int* wt = (int*)malloc(edgesSize * 2 * sizeof(int));
  memset(head, -1, (n + 1) * sizeof(int));
  int idx = 0;
  for (int i = 0; i < edgesSize; i++) {
    int u = edges[i][0], v = edges[i][1], w = edges[i][2];
    to[idx] = v; wt[idx] = w; nxt[idx] = head[u]; head[u] = idx++;
    to[idx] = u; wt[idx] = w; nxt[idx] = head[v]; head[v] = idx++;
  }
  // Dijkstra
  long long* dist = (long long*)malloc((n + 1) * sizeof(long long));
  for (int i = 0; i <= n; i++) dist[i] = 1e18;
  dist[n] = 0;
  PQNode1786* pq = (PQNode1786*)malloc((edgesSize * 2 + 1) * sizeof(PQNode1786));
  int pqSize = 0;
  pq[pqSize++] = (PQNode1786){n, 0};
  char* visited = (char*)calloc(n + 1, 1);
  while (pqSize > 0) {
    // 找最小
    int mi = 0;
    for (int i = 1; i < pqSize; i++)
      if (pq[i].dist < pq[mi].dist) mi = i;
    PQNode1786 cur = pq[mi];
    pq[mi] = pq[--pqSize];
    if (visited[cur.node]) continue;
    visited[cur.node] = 1;
    for (int e = head[cur.node]; e != -1; e = nxt[e]) {
      if (cur.dist + wt[e] < dist[to[e]]) {
        dist[to[e]] = cur.dist + wt[e];
        pq[pqSize++] = (PQNode1786){to[e], dist[to[e]]};
      }
    }
  }
  // 按 dist 升序排序
  int* order = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) order[i] = i + 1;
  // 简单排序 - 用全局变量
  long long* g_dist1786 = dist;
  // qsort with dist
  for (int i = 0; i < n - 1; i++)
    for (int j = i + 1; j < n; j++)
      if (dist[order[j]] < dist[order[i]]) {
        int t = order[i]; order[i] = order[j]; order[j] = t;
      }
  long long* dp = (long long*)calloc(n + 1, sizeof(long long));
  dp[n] = 1;
  for (int i = 0; i < n; i++) {
    int u = order[i];
    for (int e = head[u]; e != -1; e = nxt[e]) {
      if (dist[u] > dist[to[e]]) {
        dp[u] = (dp[u] + dp[to[e]]) % MOD1786;
      }
    }
  }
  int ans = (int)dp[1];
  free(head); free(nxt); free(to); free(wt); free(dist);
  free(pq); free(visited); free(order); free(dp);
  return ans;
}
