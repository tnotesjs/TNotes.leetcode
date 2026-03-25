int cmpLL(const void* a, const void* b) {
    long long va = *(long long*)a, vb = *(long long*)b;
    return va < vb ? -1 : va > vb ? 1 : 0;
}

int minAreaRect(int** points, int pointsSize, int* pointsColSize) {
    int n = pointsSize;
    long long* encoded = malloc(n * sizeof(long long));
    for (int i = 0; i < n; i++)
        encoded[i] = (long long)points[i][0] * 40001 + points[i][1];
    qsort(encoded, n, sizeof(long long), cmpLL);

    int minArea = 0, found = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int x1 = points[i][0], y1 = points[i][1];
            int x2 = points[j][0], y2 = points[j][1];
            if (x1 == x2 || y1 == y2) continue;

            int area = abs(x1 - x2) * abs(y1 - y2);
            if (found && area >= minArea) continue;

            long long k1 = (long long)x1 * 40001 + y2;
            long long k2 = (long long)x2 * 40001 + y1;
            if (bsearch(&k1, encoded, n, sizeof(long long), cmpLL) &&
                bsearch(&k2, encoded, n, sizeof(long long), cmpLL)) {
                minArea = area;
                found = 1;
            }
        }
    }

    free(encoded);
    return found ? minArea : 0;
}
