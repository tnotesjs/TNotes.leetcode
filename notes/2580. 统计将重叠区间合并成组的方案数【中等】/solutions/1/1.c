int cmp(const void* a, const void* b) {
    int* ra = *(int**)a, *rb = *(int**)b;
    return ra[0] - rb[0];
}

int countWays(int** ranges, int rangesSize, int* rangesColSize) {
    qsort(ranges, rangesSize, sizeof(int*), cmp);
    long long MOD = 1000000007;
    int groups = 0, maxEnd = -1;
    for (int i = 0; i < rangesSize; i++) {
        if (ranges[i][0] > maxEnd) groups++;
        if (ranges[i][1] > maxEnd) maxEnd = ranges[i][1];
    }
    long long ans = 1;
    for (int i = 0; i < groups; i++) ans = ans * 2 % MOD;
    return (int)ans;
}
