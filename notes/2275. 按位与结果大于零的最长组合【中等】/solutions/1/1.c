int largestCombination(int* candidates, int candidatesSize) {
    int res = 0;
    for (int bit = 0; bit < 24; bit++) {
        int cnt = 0;
        for (int i = 0; i < candidatesSize; i++) {
            if (candidates[i] & (1 << bit)) cnt++;
        }
        if (cnt > res) res = cnt;
    }
    return res;
}
