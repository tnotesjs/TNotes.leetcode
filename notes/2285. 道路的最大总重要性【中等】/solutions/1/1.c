int cmp2285(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

long long maximumImportance(int n, int** roads, int roadsSize, int* roadsColSize) {
    int* degree = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < roadsSize; i++) {
        degree[roads[i][0]]++;
        degree[roads[i][1]]++;
    }
    qsort(degree, n, sizeof(int), cmp2285);
    long long res = 0;
    for (int i = 0; i < n; i++) {
        res += (long long)(i + 1) * degree[i];
    }
    free(degree);
    return res;
}
