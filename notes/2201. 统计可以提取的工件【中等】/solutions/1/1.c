int digArtifacts(int n, int** artifacts, int artifactsSize, int* artifactsColSize,
                 int** dig, int digSize, int* digColSize) {
    int *dug = (int *)calloc(n * n, sizeof(int));
    for (int i = 0; i < digSize; i++) {
        dug[dig[i][0] * n + dig[i][1]] = 1;
    }
    int count = 0;
    for (int i = 0; i < artifactsSize; i++) {
        int r1 = artifacts[i][0], c1 = artifacts[i][1];
        int r2 = artifacts[i][2], c2 = artifacts[i][3];
        int allDug = 1;
        for (int r = r1; r <= r2 && allDug; r++) {
            for (int c = c1; c <= c2 && allDug; c++) {
                if (!dug[r * n + c]) allDug = 0;
            }
        }
        if (allDug) count++;
    }
    free(dug);
    return count;
}
