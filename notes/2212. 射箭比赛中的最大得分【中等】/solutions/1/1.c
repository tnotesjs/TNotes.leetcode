int* maximumBobPoints(int numArrows, int* aliceArrows, int aliceArrowsSize, int* returnSize) {
    int bestScore = 0, bestMask = 0;
    for (int mask = 0; mask < (1 << 12); mask++) {
        int cost = 0, score = 0;
        for (int i = 0; i < 12; i++) {
            if (mask & (1 << i)) {
                cost += aliceArrows[i] + 1;
                score += i;
            }
        }
        if (cost <= numArrows && score > bestScore) {
            bestScore = score;
            bestMask = mask;
        }
    }
    *returnSize = 12;
    int *res = (int *)calloc(12, sizeof(int));
    int remaining = numArrows;
    for (int i = 0; i < 12; i++) {
        if (bestMask & (1 << i)) {
            res[i] = aliceArrows[i] + 1;
            remaining -= res[i];
        }
    }
    res[0] += remaining;
    return res;
}
