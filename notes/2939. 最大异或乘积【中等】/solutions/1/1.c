int maximumXorProduct(long long a, long long b, int n) {
    long long MOD = 1000000007;
    for (int i = n - 1; i >= 0; i--) {
        long long mask = 1LL << i;
        if (((a >> i) & 1) == ((b >> i) & 1)) {
            a |= mask;
            b |= mask;
        } else {
            if (a < b) {
                a |= mask;
                b &= ~mask;
            } else {
                b |= mask;
                a &= ~mask;
            }
        }
    }
    return (int)((a % MOD) * (b % MOD) % MOD);
}
