long long getDescentPeriods(int* prices, int pricesSize) {
    long long res = 0, count = 1;
    for (int i = 0; i < pricesSize; i++) {
        if (i > 0 && prices[i - 1] - prices[i] == 1) {
            count++;
        } else {
            count = 1;
        }
        res += count;
    }
    return res;
}
