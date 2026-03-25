int cmp(const void* a, const void* b) {
    return ((int*)b)[1] - ((int*)a)[1];
}

int* rearrangeBarcodes(int* barcodes, int barcodesSize, int* returnSize) {
    int count[10001] = {0};
    int maxVal = 0;
    for (int i = 0; i < barcodesSize; i++) {
        count[barcodes[i]]++;
        if (barcodes[i] > maxVal) maxVal = barcodes[i];
    }
    int pairs[maxVal + 1][2];
    int pLen = 0;
    for (int i = 1; i <= maxVal; i++) {
        if (count[i] > 0) {
            pairs[pLen][0] = i;
            pairs[pLen][1] = count[i];
            pLen++;
        }
    }
    qsort(pairs, pLen, sizeof(int[2]), cmp);
    int* res = malloc(barcodesSize * sizeof(int));
    int idx = 0;
    for (int p = 0; p < pLen; p++) {
        for (int i = 0; i < pairs[p][1]; i++) {
            res[idx] = pairs[p][0];
            idx += 2;
            if (idx >= barcodesSize) idx = 1;
        }
    }
    *returnSize = barcodesSize;
    return res;
}
