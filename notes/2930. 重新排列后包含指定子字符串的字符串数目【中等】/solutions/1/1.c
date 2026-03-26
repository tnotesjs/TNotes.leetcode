long long power(long long base, long long exp, long long mod) {
    long long result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = result * base % mod;
        base = base * base % mod;
        exp >>= 1;
    }
    return result;
}

int stringCount(int n) {
    long long MOD = 1000000007;
    long long N = n;
    long long ans = power(26, N, MOD);
    ans = (ans - 3 * power(25, N, MOD) % MOD + MOD) % MOD;
    ans = (ans - N % MOD * power(25, N - 1, MOD) % MOD + MOD) % MOD;
    ans = (ans + 3 * power(24, N, MOD) % MOD) % MOD;
    ans = (ans + 2 * (N % MOD) % MOD * power(24, N - 1, MOD) % MOD) % MOD;
    ans = (ans - power(23, N, MOD) + MOD) % MOD;
    ans = (ans - N % MOD * power(23, N - 1, MOD) % MOD + MOD) % MOD;
    return (int)ans;
}
