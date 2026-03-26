int cmp2033(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int minOperations(int** grid, int gridSize, int* gridColSize, int x) {
    int n = gridSize * gridColSize[0];
    int* arr = (int*)malloc(n * sizeof(int));
    int idx = 0;
    for (int i = 0; i < gridSize; i++)
        for (int j = 0; j < gridColSize[0]; j++)
            arr[idx++] = grid[i][j];
    int mod = ((arr[0] % x) + x) % x;
    for (int i = 0; i < n; i++) {
        if (((arr[i] % x) + x) % x != mod) { free(arr); return -1; }
    }
    qsort(arr, n, sizeof(int), cmp2033);
    int median = arr[n / 2];
    long long ops = 0;
    for (int i = 0; i < n; i++) ops += abs(arr[i] - median) / x;
    free(arr);
    return (int)ops;
}
