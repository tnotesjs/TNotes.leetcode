int shortestPathBinaryMatrix(int** grid, int gridSize, int* gridColSize) {
    int n = gridSize;
    if (grid[0][0] || grid[n - 1][n - 1]) return -1;
    int dirs[8][2] = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};
    int queue[n * n][2];
    int front = 0, back = 0;
    queue[back][0] = 0; queue[back][1] = 0; back++;
    grid[0][0] = 1;
    int dist = 1;
    while (front < back) {
        int size = back - front;
        for (int q = 0; q < size; q++) {
            int r = queue[front][0], c = queue[front][1]; front++;
            if (r == n - 1 && c == n - 1) return dist;
            for (int d = 0; d < 8; d++) {
                int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 0) {
                    grid[nr][nc] = 1;
                    queue[back][0] = nr; queue[back][1] = nc; back++;
                }
            }
        }
        dist++;
    }
    return -1;
}
