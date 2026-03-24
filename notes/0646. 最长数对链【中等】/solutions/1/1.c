int cmp(const void* a, const void* b) {
    return (*(int**)a)[1] - (*(int**)b)[1];
}

int findLongestChain(int** pairs, int pairsSize, int* pairsColSize) {
    qsort(pairs, pairsSize, sizeof(int*), cmp);
    int count = 1, end = pairs[0][1];
    for (int i = 1; i < pairsSize; i++) {
        if (pairs[i][0] > end) {
            count++;
            end = pairs[i][1];
        }
    }
    return count;
}
