int cmp2279(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int maximumBags(int* capacity, int capacitySize, int* rocks, int rocksSize, int additionalRocks) {
    int n = capacitySize;
    int* need = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) need[i] = capacity[i] - rocks[i];
    qsort(need, n, sizeof(int), cmp2279);
    int res = 0;
    for (int i = 0; i < n; i++) {
        if (additionalRocks >= need[i]) {
            additionalRocks -= need[i];
            res++;
        } else break;
    }
    free(need);
    return res;
}
