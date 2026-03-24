int maxProfit(int* prices, int pricesSize, int fee) {
    int hold = -prices[0], cash = 0;
    for (int i = 1; i < pricesSize; i++) {
        int newCash = cash > hold + prices[i] - fee ? cash : hold + prices[i] - fee;
        int newHold = hold > cash - prices[i] ? hold : cash - prices[i];
        cash = newCash;
        hold = newHold;
    }
    return cash;
}
