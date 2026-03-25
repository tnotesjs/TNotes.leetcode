int par[250001];
int rnk[250001];

int findP(int x) {
    while (par[x] != x) { par[x] = par[par[x]]; x = par[x]; }
    return x;
}

int unionP(int a, int b) {
    int ra = findP(a), rb = findP(b);
    if (ra == rb) return 1;
    if (rnk[ra] < rnk[rb]) par[ra] = rb;
    else if (rnk[ra] > rnk[rb]) par[rb] = ra;
    else { par[rb] = ra; rnk[ra]++; }
    return 0;
}

bool containsCycle(char** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    for (int i = 0; i < m * n; i++) { par[i] = i; rnk[i] = 0; }
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            if (j + 1 < n && grid[i][j] == grid[i][j+1])
                if (unionP(i*n+j, i*n+j+1)) return true;
            if (i + 1 < m && grid[i][j] == grid[i+1][j])
                if (unionP(i*n+j, (i+1)*n+j)) return true;
        }
    return false;
}
