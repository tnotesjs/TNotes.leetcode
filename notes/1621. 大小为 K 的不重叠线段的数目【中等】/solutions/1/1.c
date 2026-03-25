long long power(long long base, long long exp, long long mod) {
    long long result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = result * base % mod;
        exp >>= 1;
        base = base * base % mod;
    }
    return result;
}

int numberOfSets(int n, int k) {
    long long MOD = 1000000007;
    int total = n + k - 1, choose = 2 * k;
    if (choose > total) return 0;
    long long num = 1, den = 1;
    for (int i = 0; i < choose; i++) {
        num = num * (total - i) % MOD;
        den = den * (i + 1) % MOD;
    }
    return (int)(num % MOD * power(den, MOD - 2, MOD) % MOD);
}
