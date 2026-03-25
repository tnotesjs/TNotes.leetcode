int cmpInt(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int maxArea(int h, int w, int* horizontalCuts, int horizontalCutsSize,
            int* verticalCuts, int verticalCutsSize) {
    long long MOD = 1000000007;
    qsort(horizontalCuts, horizontalCutsSize, sizeof(int), cmpInt);
    qsort(verticalCuts, verticalCutsSize, sizeof(int), cmpInt);
    long long maxH = horizontalCuts[0];
    for (int i = 1; i < horizontalCutsSize; i++) {
        long long d = horizontalCuts[i] - horizontalCuts[i-1];
        if (d > maxH) maxH = d;
    }
    long long d = h - horizontalCuts[horizontalCutsSize - 1];
    if (d > maxH) maxH = d;

    long long maxW = verticalCuts[0];
    for (int i = 1; i < verticalCutsSize; i++) {
        d = verticalCuts[i] - verticalCuts[i-1];
        if (d > maxW) maxW = d;
    }
    d = w - verticalCuts[verticalCutsSize - 1];
    if (d > maxW) maxW = d;

    return (int)(maxH % MOD * (maxW % MOD) % MOD);
}
