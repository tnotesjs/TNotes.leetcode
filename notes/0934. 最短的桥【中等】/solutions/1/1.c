void dfs(int** grid, int n, int i, int j, int* qx, int* qy, int* qSize) {
    grid[i][j] = 2;
    qx[*qSize] = i;
    qy[*qSize] = j;
    (*qSize)++;
    int dx[] = {0, 0, 1, -1}, dy[] = {1, -1, 0, 0};
    for (int d = 0; d < 4; d++) {
        int ni = i + dx[d], nj = j + dy[d];
        if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] == 1)
            dfs(grid, n, ni, nj, qx, qy, qSize);
    }
}

int shortestBridge(int** grid, int gridSize, int* gridColSize) {
    int n = gridSize;
    int* qx = malloc(n * n * sizeof(int));
    int* qy = malloc(n * n * sizeof(int));
    int qSize = 0, front = 0, found = 0;

    for (int i = 0; i < n && !found; i++)
        for (int j = 0; j < n && !found; j++)
            if (grid[i][j] == 1) {
                dfs(grid, n, i, j, qx, qy, &qSize);
                found = 1;
            }

    int dx[] = {0, 0, 1, -1}, dy[] = {1, -1, 0, 0};
    int step = 0;
    while (front < qSize) {
        int size = qSize - front;
        for (int s = 0; s < size; s++) {
            int x = qx[front], y = qy[front];
            front++;
            for (int d = 0; d < 4; d++) {
                int nx = x + dx[d], ny = y + dy[d];
                if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                    if (grid[nx][ny] == 1) { free(qx); free(qy); return step; }
                    if (grid[nx][ny] == 0) {
                        grid[nx][ny] = 2;
                        qx[qSize] = nx;
                        qy[qSize] = ny;
                        qSize++;
                    }
                }
            }
        }
        step++;
    }

    free(qx);
    free(qy);
    return -1;
}
