long long modPow_c(long long base, long long exp, long long mod) {
    long long r = 1; base %= mod;
    while (exp > 0) { if (exp & 1) r = r * base % mod; exp >>= 1; base = base * base % mod; }
    return r;
}

int cmpDesc(const void* a, const void* b) { return *(int*)b - *(int*)a; }

int countKSubsequencesWithMaxBeauty(char* s, int k) {
    long long MOD = 1000000007;
    int freq[26] = {0};
    for (int i = 0; s[i]; i++) freq[s[i] - 'a']++;
    int freqs[26], n = 0;
    for (int i = 0; i < 26; i++) if (freq[i] > 0) freqs[n++] = freq[i];
    if (k > n) return 0;

    qsort(freqs, n, sizeof(int), cmpDesc);
    int boundary = freqs[k - 1];
    long long result = 1;
    int rem = k, countBound = 0;
    for (int i = 0; i < n; i++) if (freqs[i] == boundary) countBound++;
    for (int i = 0; i < n; i++)
        if (freqs[i] > boundary) { result = result * freqs[i] % MOD; rem--; }

    long long c = 1;
    for (int i = 0; i < rem; i++) {
        c = c * (countBound - i) % MOD;
        c = c * modPow_c(i + 1, MOD - 2, MOD) % MOD;
    }
    result = result * c % MOD;
    result = result * modPow_c(boundary, rem, MOD) % MOD;
    return (int)result;
}
