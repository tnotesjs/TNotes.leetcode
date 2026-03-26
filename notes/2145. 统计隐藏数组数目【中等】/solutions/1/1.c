int numberOfArrays(int* differences, int differencesSize, int lower, int upper) {
    long long prefix = 0, minP = 0, maxP = 0;
    for (int i = 0; i < differencesSize; i++) {
        prefix += differences[i];
        if (prefix < minP) minP = prefix;
        if (prefix > maxP) maxP = prefix;
    }
    long long res = (upper - maxP) - (lower - minP) + 1;
    return res > 0 ? (int)res : 0;
}
