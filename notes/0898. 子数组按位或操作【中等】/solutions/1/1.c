int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int subarrayBitwiseORs(int* arr, int arrSize) {
    int cap = arrSize * 32;
    int* all = (int*)malloc(sizeof(int) * cap);
    int allSize = 0;
    int prev[32], cur[32];
    int prevSize = 0;
    for (int i = 0; i < arrSize; i++) {
        int curSize = 0;
        cur[curSize++] = arr[i];
        for (int j = 0; j < prevSize; j++) {
            int v = prev[j] | arr[i];
            bool found = false;
            for (int k = 0; k < curSize; k++) if (cur[k] == v) { found = true; break; }
            if (!found) cur[curSize++] = v;
        }
        for (int j = 0; j < curSize; j++) all[allSize++] = cur[j];
        memcpy(prev, cur, sizeof(int) * curSize);
        prevSize = curSize;
    }
    qsort(all, allSize, sizeof(int), cmp);
    int res = allSize > 0 ? 1 : 0;
    for (int i = 1; i < allSize; i++) if (all[i] != all[i - 1]) res++;
    free(all);
    return res;
}
