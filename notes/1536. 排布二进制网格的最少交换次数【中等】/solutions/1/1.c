int minSwaps(int** grid, int gridSize, int* gridColSize) {
    int n = gridSize;
    int* trailing = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        int cnt = 0;
        for (int j = n - 1; j >= 0; j--) {
            if (grid[i][j] == 0) cnt++;
            else break;
        }
        trailing[i] = cnt;
    }
    int swaps = 0;
    for (int i = 0; i < n; i++) {
        int need = n - 1 - i;
        if (trailing[i] >= need) continue;
        int j = i + 1;
        while (j < n && trailing[j] < need) j++;
        if (j == n) { free(trailing); return -1; }
        while (j > i) {
            int tmp = trailing[j]; trailing[j] = trailing[j-1]; trailing[j-1] = tmp;
            j--; swaps++;
        }
    }
    free(trailing);
    return swaps;
}
