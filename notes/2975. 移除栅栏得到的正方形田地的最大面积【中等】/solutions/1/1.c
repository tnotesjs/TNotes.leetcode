int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int maximizeSquareArea(int m, int n, int* hFences, int hFencesSize, int* vFences, int vFencesSize) {
    long long MOD = 1e9 + 7;
    int hSize = hFencesSize + 2;
    int* h = malloc(hSize * sizeof(int));
    h[0] = 1; h[hSize - 1] = m;
    for (int i = 0; i < hFencesSize; i++) h[i + 1] = hFences[i];
    qsort(h, hSize, sizeof(int), cmp);
    int vSize = vFencesSize + 2;
    int* v = malloc(vSize * sizeof(int));
    v[0] = 1; v[vSize - 1] = n;
    for (int i = 0; i < vFencesSize; i++) v[i + 1] = vFences[i];
    qsort(v, vSize, sizeof(int), cmp);
    int hgCap = hSize * (hSize - 1) / 2;
    int* hGaps = malloc(hgCap * sizeof(int));
    int hgIdx = 0;
    for (int i = 0; i < hSize; i++)
        for (int j = i + 1; j < hSize; j++)
            hGaps[hgIdx++] = h[j] - h[i];
    qsort(hGaps, hgIdx, sizeof(int), cmp);
    int unique = 0;
    for (int i = 0; i < hgIdx; i++)
        if (i == 0 || hGaps[i] != hGaps[i - 1])
            hGaps[unique++] = hGaps[i];
    hgIdx = unique;
    int maxSide = -1;
    for (int i = 0; i < vSize; i++) {
        for (int j = i + 1; j < vSize; j++) {
            int gap = v[j] - v[i];
            int lo = 0, hi = hgIdx - 1;
            while (lo <= hi) {
                int mid = (lo + hi) / 2;
                if (hGaps[mid] == gap) { if (gap > maxSide) maxSide = gap; break; }
                else if (hGaps[mid] < gap) lo = mid + 1;
                else hi = mid - 1;
            }
        }
    }
    free(h); free(v); free(hGaps);
    if (maxSide == -1) return -1;
    return (int)((long long)maxSide * maxSide % MOD);
}
