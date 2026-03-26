int cmp2171(const void* a, const void* b) {
    return (*(int*)a > *(int*)b) - (*(int*)a < *(int*)b);
}

long long minimumRemoval(int* beans, int beansSize) {
    qsort(beans, beansSize, sizeof(int), cmp2171);
    long long total = 0;
    for (int i = 0; i < beansSize; i++) total += beans[i];
    long long res = total;
    for (int i = 0; i < beansSize; i++) {
        long long remaining = (long long)beans[i] * (beansSize - i);
        long long removal = total - remaining;
        if (removal < res) res = removal;
    }
    return res;
}
