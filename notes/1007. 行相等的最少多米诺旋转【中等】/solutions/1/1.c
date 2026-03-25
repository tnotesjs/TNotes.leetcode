int check(int* tops, int* bottoms, int n, int target) {
    int rotTop = 0, rotBot = 0;
    for (int i = 0; i < n; i++) {
        if (tops[i] != target && bottoms[i] != target) return INT_MAX;
        if (tops[i] != target) rotTop++;
        if (bottoms[i] != target) rotBot++;
    }
    return rotTop < rotBot ? rotTop : rotBot;
}

int minDominoRotations(int* tops, int topsSize, int* bottoms, int bottomsSize) {
    int a = check(tops, bottoms, topsSize, tops[0]);
    int b = check(tops, bottoms, topsSize, bottoms[0]);
    int res = a < b ? a : b;
    return res == INT_MAX ? -1 : res;
}
