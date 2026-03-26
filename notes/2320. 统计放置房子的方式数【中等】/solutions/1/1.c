int countHousePlacements(int n) {
    long long MOD = 1000000007;
    long long a = 1, b = 1;
    for (int i = 1; i <= n; i++) {
        long long t = (a + b) % MOD;
        a = b;
        b = t;
    }
    return (int)(b * b % MOD);
}
