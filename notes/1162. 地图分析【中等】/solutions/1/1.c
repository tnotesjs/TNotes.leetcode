int maxDistance(int** grid, int gridSize, int* gridColSize) {
    int n = gridSize;
    int queue[n * n][2];
    int front = 0, back = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                queue[back][0] = i;
                queue[back][1] = j;
                back++;
            }
        }
    }
    if (back == 0 || back == n * n) return -1;
    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};
    int dist = -1;
    while (front < back) {
        int size = back - front;
        for (int s = 0; s < size; s++) {
            int x = queue[front][0], y = queue[front][1];
            front++;
            for (int d = 0; d < 4; d++) {
                int nx = x + dirs[d][0], ny = y + dirs[d][1];
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] == 0) {
                    grid[nx][ny] = 1;
                    queue[back][0] = nx;
                    queue[back][1] = ny;
                    back++;
                }
            }
        }
        dist++;
    }
    return dist;
}
