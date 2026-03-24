int** updateMatrix(int** mat, int matSize, int* matColSize, int* returnSize, int** returnColumnSizes) {
    int m = matSize, n = matColSize[0];
    int** dist = (int**)malloc(sizeof(int*) * m);
    int* queue = (int*)malloc(sizeof(int) * m * n * 2);
    int head = 0, tail = 0;
    for (int i = 0; i < m; i++) {
        dist[i] = (int*)malloc(sizeof(int) * n);
        for (int j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                dist[i][j] = 0;
                queue[tail++] = i;
                queue[tail++] = j;
            } else {
                dist[i][j] = m + n;
            }
        }
    }
    int dirs[4][2] = {{1,0},{-1,0},{0,1},{0,-1}};
    while (head < tail) {
        int x = queue[head++], y = queue[head++];
        for (int d = 0; d < 4; d++) {
            int nx = x + dirs[d][0], ny = y + dirs[d][1];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && dist[nx][ny] > dist[x][y] + 1) {
                dist[nx][ny] = dist[x][y] + 1;
                queue[tail++] = nx;
                queue[tail++] = ny;
            }
        }
    }
    free(queue);
    *returnSize = m;
    *returnColumnSizes = (int*)malloc(sizeof(int) * m);
    for (int i = 0; i < m; i++) (*returnColumnSizes)[i] = n;
    return dist;
}
