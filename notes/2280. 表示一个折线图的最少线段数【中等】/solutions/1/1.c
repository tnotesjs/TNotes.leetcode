int cmp2280(const void* a, const void* b) {
    return (*(int**)a)[0] - (*(int**)b)[0];
}

int minimumLines(int** stockPrices, int stockPricesSize, int* stockPricesColSize) {
    if (stockPricesSize <= 1) return 0;
    qsort(stockPrices, stockPricesSize, sizeof(int*), cmp2280);
    int res = 1;
    for (int i = 2; i < stockPricesSize; i++) {
        long long dx1 = stockPrices[i][0] - stockPrices[i - 1][0];
        long long dy1 = stockPrices[i][1] - stockPrices[i - 1][1];
        long long dx2 = stockPrices[i - 1][0] - stockPrices[i - 2][0];
        long long dy2 = stockPrices[i - 1][1] - stockPrices[i - 2][1];
        if (dy1 * dx2 != dy2 * dx1) res++;
    }
    return res;
}
