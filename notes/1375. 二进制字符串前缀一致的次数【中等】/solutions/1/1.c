int numTimesAllBlue(int* flips, int flipsSize) {
    int maxFlip = 0, ans = 0;
    for (int i = 0; i < flipsSize; i++) {
        if (flips[i] > maxFlip) maxFlip = flips[i];
        if (maxFlip == i + 1) ans++;
    }
    return ans;
}
