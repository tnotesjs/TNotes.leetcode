#define MOD 1000000007LL

long long modpow(long long base, long long exp, long long mod) {
    long long result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = result * base % mod;
        exp >>= 1;
        base = base * base % mod;
    }
    return result;
}

int countAnagrams(char* s) {
    int n = strlen(s);
    long long *fact = (long long *)malloc(sizeof(long long) * (n + 1));
    fact[0] = 1;
    for (int i = 1; i <= n; i++) fact[i] = fact[i - 1] * i % MOD;

    long long ans = 1;
    int i = 0;
    while (i < n) {
        if (s[i] == ' ') { i++; continue; }
        int cnt[26] = {0};
        int len = 0;
        while (i < n && s[i] != ' ') {
            cnt[s[i] - 'a']++;
            len++;
            i++;
        }
        ans = ans * fact[len] % MOD;
        for (int j = 0; j < 26; j++) {
            if (cnt[j] > 1) ans = ans * modpow(fact[cnt[j]], MOD - 2, MOD) % MOD;
        }
    }
    free(fact);
    return (int)ans;
}
