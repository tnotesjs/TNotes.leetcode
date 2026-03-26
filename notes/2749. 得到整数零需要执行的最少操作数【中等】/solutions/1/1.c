int makeTheIntegerZero(int num1, int num2) {
    for (int k = 0; k <= 60; k++) {
        long long val = (long long)num1 - (long long)k * num2;
        if (val < k) return -1;
        // popcount
        int bits = 0;
        long long v = val;
        while (v > 0) {
            bits += v & 1;
            v >>= 1;
        }
        if (bits <= k) return k;
    }
    return -1;
}
