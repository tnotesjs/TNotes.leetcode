int minOperations(int n) {
    int ops = 0;
    while (n > 0) {
        int lb = n & (-n);
        if (n & (lb << 1)) {
            n += lb;
        } else {
            n -= lb;
        }
        ops++;
    }
    return ops;
}
