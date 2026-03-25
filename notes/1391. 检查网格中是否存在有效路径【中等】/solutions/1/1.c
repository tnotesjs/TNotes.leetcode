bool hasValidPath(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    // 每种街道连接的方向：左0 右1 上2 下3
    int conns[7][2] = {{0,0},{0,1},{2,3},{0,3},{1,3},{0,2},{1,2}};
    int dr[] = {0, 0, -1, 1};
    int dc[] = {-1, 1, 0, 0};
    int opp[] = {1, 0, 3, 2};

    int* visited = (int*)calloc(m * n, sizeof(int));
    int* queue = (int*)malloc(m * n * 2 * sizeof(int));
    int head = 0, tail = 0;
    queue[tail++] = 0; queue[tail++] = 0;
    visited[0] = 1;

    while (head < tail) {
        int r = queue[head++], c = queue[head++];
        if (r == m - 1 && c == n - 1) { free(visited); free(queue); return true; }
        int type = grid[r][c];
        for (int k = 0; k < 2; k++) {
            int d = conns[type][k];
            int nr = r + dr[d], nc = c + dc[d];
            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if (visited[nr * n + nc]) continue;
            int ntype = grid[nr][nc];
            int need = opp[d];
            if (conns[ntype][0] != need && conns[ntype][1] != need) continue;
            visited[nr * n + nc] = 1;
            queue[tail++] = nr; queue[tail++] = nc;
        }
    }
    free(visited); free(queue);
    return false;
}
