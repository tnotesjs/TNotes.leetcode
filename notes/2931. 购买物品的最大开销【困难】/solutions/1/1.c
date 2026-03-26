int cmpInt(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

long long maxSpending(int** values, int valuesSize, int* valuesColSize) {
    int m = valuesSize, n = valuesColSize[0];
    int total = m * n;
    int *all = malloc(total * sizeof(int));
    int idx = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            all[idx++] = values[i][j];
    qsort(all, total, sizeof(int), cmpInt);
    long long ans = 0;
    for (int d = 1; d <= total; d++)
        ans += (long long)all[d - 1] * d;
    free(all);
    return ans;
}
