long long modpow2400(long long base, long long exp, long long mod) {
    long long result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = result * base % mod;
        exp >>= 1;
        base = base * base % mod;
    }
    return result;
}

int numberOfWays(int startPos, int endPos, int k) {
    long long MOD = 1000000007;
    int diff = abs(endPos - startPos);
    if ((k - diff) % 2 != 0 || k < diff) return 0;
    int right = (k + diff) / 2;
    long long* fact = (long long*)malloc((k + 1) * sizeof(long long));
    fact[0] = 1;
    for (int i = 1; i <= k; i++) fact[i] = fact[i - 1] * i % MOD;
    long long ans = fact[k];
    ans = ans * modpow2400(fact[right], MOD - 2, MOD) % MOD;
    ans = ans * modpow2400(fact[k - right], MOD - 2, MOD) % MOD;
    free(fact);
    return (int)ans;
}
