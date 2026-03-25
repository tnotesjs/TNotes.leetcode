#define MAX(a,b) ((a)>(b)?(a):(b))
#define MIN(a,b) ((a)<(b)?(a):(b))

int maxProductPath(int** grid, int gridSize, int* gridColSize) {
    long long MOD = 1000000007;
    int m = gridSize, n = gridColSize[0];
    long long dpMax[15][15], dpMin[15][15];
    dpMax[0][0] = dpMin[0][0] = grid[0][0];
    for (int i = 1; i < m; i++)
        dpMax[i][0] = dpMin[i][0] = dpMax[i-1][0] * grid[i][0];
    for (int j = 1; j < n; j++)
        dpMax[0][j] = dpMin[0][j] = dpMax[0][j-1] * grid[0][j];
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++) {
            long long v = grid[i][j];
            long long a = dpMax[i-1][j]*v, b = dpMin[i-1][j]*v;
            long long c = dpMax[i][j-1]*v, d = dpMin[i][j-1]*v;
            dpMax[i][j] = MAX(MAX(a,b), MAX(c,d));
            dpMin[i][j] = MIN(MIN(a,b), MIN(c,d));
        }
    if (dpMax[m-1][n-1] < 0) return -1;
    return (int)(dpMax[m-1][n-1] % MOD);
}
