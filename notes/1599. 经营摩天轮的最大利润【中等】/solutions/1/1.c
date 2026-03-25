int minOperationsMaxProfit(int* customers, int customersSize, int boardingCost, int runningCost) {
    int waiting = 0, rot = 0, bestRot = -1;
    long long profit = 0, maxProfit = 0;
    int i = 0;
    while (i < customersSize || waiting > 0) {
        if (i < customersSize) waiting += customers[i];
        int board = waiting < 4 ? waiting : 4;
        waiting -= board;
        rot++;
        profit += (long long)board * boardingCost - runningCost;
        if (profit > maxProfit) { maxProfit = profit; bestRot = rot; }
        i++;
    }
    return bestRot;
}
