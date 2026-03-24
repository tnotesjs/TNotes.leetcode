int maxProfit(int* prices, int pricesSize) {
    if (pricesSize == 0) return 0;
    int hold = -prices[0], sold = 0, rest = 0;
    for (int i = 1; i < pricesSize; i++) {
        int prevSold = sold;
        sold = hold + prices[i];
        hold = hold > rest - prices[i] ? hold : rest - prices[i];
        rest = rest > prevSold ? rest : prevSold;
    }
    return sold > rest ? sold : rest;
}
