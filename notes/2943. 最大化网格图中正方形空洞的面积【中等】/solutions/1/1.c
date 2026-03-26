int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int maximizeSquareHoleArea(int n, int m, int* hBars, int hBarsSize, int* vBars, int vBarsSize) {
    qsort(hBars, hBarsSize, sizeof(int), cmp);
    qsort(vBars, vBarsSize, sizeof(int), cmp);

    int maxH = 1, cur = 1;
    for (int i = 1; i < hBarsSize; i++) {
        cur = (hBars[i] == hBars[i - 1] + 1) ? cur + 1 : 1;
        if (cur > maxH) maxH = cur;
    }
    int maxV = 1;
    cur = 1;
    for (int i = 1; i < vBarsSize; i++) {
        cur = (vBars[i] == vBars[i - 1] + 1) ? cur + 1 : 1;
        if (cur > maxV) maxV = cur;
    }
    int side = (maxH + 1 < maxV + 1) ? maxH + 1 : maxV + 1;
    return side * side;
}
