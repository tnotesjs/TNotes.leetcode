int maximumSafenessFactor(int** grid, int gridSize, int* gridColSize) {
  int n = gridSize;
  int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
  int** dist = (int**)malloc(n * sizeof(int*));
  for (int i = 0; i < n; i++) {
    dist[i] = (int*)malloc(n * sizeof(int));
    for (int j = 0; j < n; j++) dist[i][j] = -1;
  }
  int (*queue)[2] = malloc(n * n * sizeof(int[2]));
  int head = 0, tail = 0;
  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
      if (grid[i][j] == 1) { dist[i][j] = 0; queue[tail][0] = i; queue[tail][1] = j; tail++; }
  while (head < tail) {
    int r = queue[head][0], c = queue[head][1]; head++;
    for (int d = 0; d < 4; d++) {
      int nr = r + dirs[d][0], nc = c + dirs[d][1];
      if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] == -1) {
        dist[nr][nc] = dist[r][c] + 1;
        queue[tail][0] = nr; queue[tail][1] = nc; tail++;
      }
    }
  }
  int lo = 0, hi = n * 2;
  int (*q2)[2] = malloc(n * n * sizeof(int[2]));
  int* vis = (int*)calloc(n * n, sizeof(int));
  while (lo < hi) {
    int mid = (lo + hi + 1) / 2;
    if (dist[0][0] < mid || dist[n-1][n-1] < mid) { hi = mid - 1; continue; }
    memset(vis, 0, n * n * sizeof(int));
    int h2 = 0, t2 = 0;
    q2[t2][0] = 0; q2[t2][1] = 0; t2++;
    vis[0] = 1;
    int found = 0;
    while (h2 < t2) {
      int r = q2[h2][0], c = q2[h2][1]; h2++;
      if (r == n-1 && c == n-1) { found = 1; break; }
      for (int d = 0; d < 4; d++) {
        int nr = r + dirs[d][0], nc = c + dirs[d][1];
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && !vis[nr*n+nc] && dist[nr][nc] >= mid) {
          vis[nr*n+nc] = 1;
          q2[t2][0] = nr; q2[t2][1] = nc; t2++;
        }
      }
    }
    if (found) lo = mid; else hi = mid - 1;
  }
  for (int i = 0; i < n; i++) free(dist[i]);
  free(dist); free(queue); free(q2); free(vis);
  return lo;
}
