int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxCoins(int* piles, int pilesSize) {
    qsort(piles, pilesSize, sizeof(int), cmpInt);
    int res = 0;
    for (int i = pilesSize - 2; i >= pilesSize / 3; i -= 2)
        res += piles[i];
    return res;
}
