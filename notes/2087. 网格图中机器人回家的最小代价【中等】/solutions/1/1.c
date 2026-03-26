int minCost(int* startPos, int startPosSize, int* homePos, int homePosSize, int* rowCosts, int rowCostsSize, int* colCosts, int colCostsSize) {
    int cost = 0;
    int sr = startPos[0], sc = startPos[1];
    int hr = homePos[0], hc = homePos[1];
    if (sr < hr) {
        for (int r = sr + 1; r <= hr; r++) cost += rowCosts[r];
    } else {
        for (int r = sr - 1; r >= hr; r--) cost += rowCosts[r];
    }
    if (sc < hc) {
        for (int c = sc + 1; c <= hc; c++) cost += colCosts[c];
    } else {
        for (int c = sc - 1; c >= hc; c--) cost += colCosts[c];
    }
    return cost;
}
