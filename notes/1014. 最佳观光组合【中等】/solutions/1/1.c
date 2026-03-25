int maxScoreSightseeingPair(int* values, int valuesSize) {
    int res = 0;
    int maxI = values[0];
    for (int j = 1; j < valuesSize; j++) {
        int score = maxI + values[j] - j;
        if (score > res) res = score;
        if (values[j] + j > maxI) maxI = values[j] + j;
    }
    return res;
}
