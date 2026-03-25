int numPairsDivisibleBy60(int* time, int timeSize) {
    int cnt[60] = {0};
    int res = 0;
    for (int i = 0; i < timeSize; i++) {
        int r = time[i] % 60;
        int target = (60 - r) % 60;
        res += cnt[target];
        cnt[r]++;
    }
    return res;
}
