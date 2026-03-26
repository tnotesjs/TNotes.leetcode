int cmp2551(const void* a, const void* b) {
    long long va = *(long long*)a, vb = *(long long*)b;
    return va < vb ? -1 : va > vb ? 1 : 0;
}

long long putMarbles(int* weights, int weightsSize, int k) {
    int n = weightsSize;
    if (k == 1 || k == n) return 0;
    int m = n - 1;
    long long* pairs = (long long*)malloc(m * sizeof(long long));
    for (int i = 0; i < m; i++) pairs[i] = (long long)weights[i] + weights[i + 1];
    qsort(pairs, m, sizeof(long long), cmp2551);
    long long diff = 0;
    for (int i = 0; i < k - 1; i++) diff += pairs[m - 1 - i] - pairs[i];
    free(pairs);
    return diff;
}
