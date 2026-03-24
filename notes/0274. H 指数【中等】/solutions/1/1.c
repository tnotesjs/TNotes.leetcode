int hIndex(int* citations, int citationsSize) {
    int n = citationsSize;
    int* count = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < n; i++) {
        count[citations[i] < n ? citations[i] : n]++;
    }
    int total = 0;
    for (int i = n; i >= 0; i--) {
        total += count[i];
        if (total >= i) { free(count); return i; }
    }
    free(count);
    return 0;
}
