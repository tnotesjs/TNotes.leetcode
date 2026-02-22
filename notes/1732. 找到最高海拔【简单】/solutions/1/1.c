int largestAltitude(int* gain, int gainSize) {
    int cur = 0, best = 0;
    for (int i = 0; i < gainSize; i++) {
        cur += gain[i];
        if (cur > best) best = cur;
    }
    return best;
}
