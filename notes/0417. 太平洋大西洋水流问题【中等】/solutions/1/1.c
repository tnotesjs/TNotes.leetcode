int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};

void dfs(int** heights, int m, int n, int r, int c, int** visited) {
    visited[r][c] = 1;
    for (int d = 0; d < 4; d++) {
        int nr = r + dirs[d][0], nc = c + dirs[d][1];
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc] && heights[nr][nc] >= heights[r][c])
            dfs(heights, m, n, nr, nc, visited);
    }
}

int** pacificAtlantic(int** heights, int heightsSize, int* heightsColSize, int* returnSize, int** returnColumnSizes) {
    int m = heightsSize, n = heightsColSize[0];
    int** pac = (int**)calloc(m, sizeof(int*));
    int** atl = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) { pac[i] = (int*)calloc(n, sizeof(int)); atl[i] = (int*)calloc(n, sizeof(int)); }
    for (int i = 0; i < m; i++) { dfs(heights, m, n, i, 0, pac); dfs(heights, m, n, i, n-1, atl); }
    for (int j = 0; j < n; j++) { dfs(heights, m, n, 0, j, pac); dfs(heights, m, n, m-1, j, atl); }
    int** res = (int**)malloc(sizeof(int*) * m * n);
    *returnSize = 0;
    *returnColumnSizes = (int*)malloc(sizeof(int) * m * n);
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (pac[i][j] && atl[i][j]) {
                res[*returnSize] = (int*)malloc(sizeof(int) * 2);
                res[*returnSize][0] = i; res[*returnSize][1] = j;
                (*returnColumnSizes)[*returnSize] = 2;
                (*returnSize)++;
            }
    for (int i = 0; i < m; i++) { free(pac[i]); free(atl[i]); }
    free(pac); free(atl);
    return res;
}
