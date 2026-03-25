int largestOverlap(int** img1, int img1Size, int* img1ColSize, int** img2, int img2Size, int* img2ColSize) {
    int n = img1Size;
    int count[61][61];
    memset(count, 0, sizeof(count));
    int res = 0;
    for (int r1 = 0; r1 < n; r1++)
        for (int c1 = 0; c1 < n; c1++)
            if (img1[r1][c1])
                for (int r2 = 0; r2 < n; r2++)
                    for (int c2 = 0; c2 < n; c2++)
                        if (img2[r2][c2]) {
                            int dr = r1 - r2 + 30, dc = c1 - c2 + 30;
                            count[dr][dc]++;
                            if (count[dr][dc] > res) res = count[dr][dc];
                        }
    return res;
}
