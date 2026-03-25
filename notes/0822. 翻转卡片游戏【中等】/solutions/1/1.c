int flipgame(int* fronts, int frontsSize, int* backs, int backsSize) {
    bool bad[2001] = {false};
    for (int i = 0; i < frontsSize; i++)
        if (fronts[i] == backs[i]) bad[fronts[i]] = true;
    int res = 2001;
    for (int i = 0; i < frontsSize; i++) {
        if (!bad[fronts[i]] && fronts[i] < res) res = fronts[i];
        if (!bad[backs[i]] && backs[i] < res) res = backs[i];
    }
    return res == 2001 ? 0 : res;
}
