int cmp(const void *a, const void *b) {
    const int *ia = *(const int **)a, *ib = *(const int **)b;
    if (ia[1] != ib[1]) return ia[1] - ib[1];
    return ia[0] - ib[0];
}

long long findScore(int *nums, int numsSize) {
    int n = numsSize;
    int **ids = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        ids[i] = malloc(2 * sizeof(int));
        ids[i][0] = i;
        ids[i][1] = nums[i];
    }
    qsort(ids, n, sizeof(int *), cmp);
    int *marked = calloc(n, sizeof(int));
    long long score = 0;
    for (int k = 0; k < n; k++) {
        int i = ids[k][0];
        if (marked[i]) continue;
        score += nums[i];
        marked[i] = 1;
        if (i > 0) marked[i - 1] = 1;
        if (i < n - 1) marked[i + 1] = 1;
    }
    for (int i = 0; i < n; i++) free(ids[i]);
    free(ids);
    free(marked);
    return score;
}
