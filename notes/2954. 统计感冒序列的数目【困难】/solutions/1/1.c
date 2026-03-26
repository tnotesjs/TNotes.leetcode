#define MOD 1000000007LL

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

int numberOfSequence(int n, int* sick, int sickSize) {
    int m = sickSize;
    int total = n - m;
    if (total == 0) return 1;

    long long* fact = (long long*)malloc((total + 1) * sizeof(long long));
    long long* inv_fact = (long long*)malloc((total + 1) * sizeof(long long));
    fact[0] = 1;
    for (int i = 1; i <= total; i++) fact[i] = fact[i - 1] * i % MOD;
    inv_fact[total] = power(fact[total], MOD - 2, MOD);
    for (int i = total - 1; i >= 0; i--) inv_fact[i] = inv_fact[i + 1] * (i + 1) % MOD;

    long long result = fact[total];
    if (sick[0] > 0) result = result * inv_fact[sick[0]] % MOD;
    for (int i = 1; i < m; i++) {
        int gap = sick[i] - sick[i - 1] - 1;
        if (gap > 0) {
            result = result * inv_fact[gap] % MOD;
            result = result * power(2, gap - 1, MOD) % MOD;
        }
    }
    if (sick[m - 1] < n - 1) result = result * inv_fact[n - 1 - sick[m - 1]] % MOD;

    free(fact); free(inv_fact);
    return (int)result;
}
