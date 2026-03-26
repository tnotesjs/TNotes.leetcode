int cmp2274(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int maxConsecutive(int bottom, int top, int* special, int specialSize) {
    qsort(special, specialSize, sizeof(int), cmp2274);
    int res = special[0] - bottom;
    if (top - special[specialSize - 1] > res) res = top - special[specialSize - 1];
    for (int i = 1; i < specialSize; i++) {
        int gap = special[i] - special[i - 1] - 1;
        if (gap > res) res = gap;
    }
    return res;
}
