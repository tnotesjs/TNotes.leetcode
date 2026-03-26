long long modPow2(long long base, long long exp, long long mod) {
    long long r = 1; base = ((base % mod) + mod) % mod;
    while (exp > 0) { if (exp & 1) r = r * base % mod; exp >>= 1; base = base * base % mod; }
    return r;
}

int numberOfWays(char* s, char* t, long long k) {
    long long MOD = 1000000007;
    int n = strlen(s);
    int* fail = (int*)calloc(n, sizeof(int));
    for (int i = 1; i < n; i++) {
        int j = fail[i - 1];
        while (j > 0 && t[j] != t[i]) j = fail[j - 1];
        if (t[j] == t[i]) j++;
        fail[i] = j;
    }
    char* text = (char*)malloc(2 * n + 1);
    memcpy(text, s, n); memcpy(text + n, s, n); text[2*n] = 0;
    long long p = 0; int j = 0;
    for (int i = 0; i < 2 * n - 1; i++) {
        while (j > 0 && text[i] != t[j]) j = fail[j - 1];
        if (text[i] == t[j]) j++;
        if (j == n) { if (i - n + 1 < n) p++; j = fail[j - 1]; }
    }
    long long c = (strncmp(s, t, n) == 0) ? 1 : 0;
    long long inv_n = modPow2(n, MOD - 2, MOD);
    long long nk = modPow2(n - 1, k, MOD);
    long long sign = (k % 2 == 0) ? 1 : MOD - 1;
    long long result = (sign % MOD * ((c * n % MOD - p % MOD + MOD) % MOD) % MOD + p % MOD * nk % MOD) % MOD;
    result = result * inv_n % MOD;
    free(fail); free(text);
    return (int)result;
}
