int cmp(const void* a, const void* b) {
    int x = *(int*)a, y = *(int*)b;
    return (x > y) - (x < y);
}

int minGroupsForValidAssignment(int* nums, int numsSize) {
    int* sorted = (int*)malloc(numsSize * sizeof(int));
    memcpy(sorted, nums, numsSize * sizeof(int));
    qsort(sorted, numsSize, sizeof(int), cmp);

    int* freqs = (int*)malloc(numsSize * sizeof(int));
    int fSize = 0;
    int minFreq = numsSize;
    int i = 0;
    while (i < numsSize) {
        int j = i;
        while (j < numsSize && sorted[j] == sorted[i]) j++;
        freqs[fSize++] = j - i;
        if (j - i < minFreq) minFreq = j - i;
        i = j;
    }

    for (int k = minFreq; k >= 1; k--) {
        int total = 0;
        int valid = 1;
        for (int f = 0; f < fSize; f++) {
            int g = (freqs[f] + k) / (k + 1);
            if ((long long)g * k > freqs[f]) { valid = 0; break; }
            total += g;
        }
        if (valid) { free(sorted); free(freqs); return total; }
    }

    free(sorted);
    free(freqs);
    return numsSize;
}
