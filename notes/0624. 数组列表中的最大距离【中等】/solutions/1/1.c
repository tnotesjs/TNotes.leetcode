int maxDistance(int** arrays, int arraysSize, int* arraysColSize) {
    int minVal = arrays[0][0];
    int maxVal = arrays[0][arraysColSize[0] - 1];
    int res = 0;
    for (int i = 1; i < arraysSize; i++) {
        int curMin = arrays[i][0];
        int curMax = arrays[i][arraysColSize[i] - 1];
        int d1 = curMax - minVal; if (d1 < 0) d1 = -d1;
        int d2 = maxVal - curMin; if (d2 < 0) d2 = -d2;
        if (d1 > res) res = d1;
        if (d2 > res) res = d2;
        if (curMin < minVal) minVal = curMin;
        if (curMax > maxVal) maxVal = curMax;
    }
    return res;
}
