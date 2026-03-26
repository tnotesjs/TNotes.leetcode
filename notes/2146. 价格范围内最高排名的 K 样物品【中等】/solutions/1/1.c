int cmp2146(const void* a, const void* b) {
    const int* x = *(const int**)a;
    const int* y = *(const int**)b;
    if (x[0] != y[0]) return x[0] - y[0];
    if (x[1] != y[1]) return x[1] - y[1];
    if (x[2] != y[2]) return x[2] - y[2];
    return x[3] - y[3];
}

int** highestRankedKItems(int** grid, int gridSize, int* gridColSize, int* pricing, int pricingSize, int* start, int startSize, int k, int* returnSize, int** returnColumnSizes) {
    int m = gridSize, n = gridColSize[0];
    int low = pricing[0], high = pricing[1];
    int** items = (int**)malloc(sizeof(int*) * m * n);
    int itemCount = 0;
    int* visited = (int*)calloc(m * n, sizeof(int));
    int* qr = (int*)malloc(sizeof(int) * m * n);
    int* qc = (int*)malloc(sizeof(int) * m * n);
    int* qd = (int*)malloc(sizeof(int) * m * n);
    int front = 0, back = 0;
    qr[back] = start[0]; qc[back] = start[1]; qd[back] = 0; back++;
    visited[start[0] * n + start[1]] = 1;
    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};
    while (front < back) {
        int r = qr[front], c = qc[front], d = qd[front]; front++;
        int price = grid[r][c];
        if (price >= low && price <= high) {
            items[itemCount] = (int*)malloc(sizeof(int) * 4);
            items[itemCount][0] = d;
            items[itemCount][1] = price;
            items[itemCount][2] = r;
            items[itemCount][3] = c;
            itemCount++;
        }
        for (int i = 0; i < 4; i++) {
            int nr = r + dirs[i][0], nc = c + dirs[i][1];
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr * n + nc] && grid[nr][nc] != 0) {
                visited[nr * n + nc] = 1;
                qr[back] = nr; qc[back] = nc; qd[back] = d + 1; back++;
            }
        }
    }
    qsort(items, itemCount, sizeof(int*), cmp2146);
    int cnt = itemCount < k ? itemCount : k;
    *returnSize = cnt;
    *returnColumnSizes = (int*)malloc(sizeof(int) * cnt);
    int** res = (int**)malloc(sizeof(int*) * cnt);
    for (int i = 0; i < cnt; i++) {
        res[i] = (int*)malloc(sizeof(int) * 2);
        res[i][0] = items[i][2];
        res[i][1] = items[i][3];
        (*returnColumnSizes)[i] = 2;
    }
    for (int i = 0; i < itemCount; i++) free(items[i]);
    free(items); free(visited); free(qr); free(qc); free(qd);
    return res;
}
