int concatenatedBinary(int n) {
    long long MOD = 1000000007;
    long long res = 0;
    int bits = 0;
    for (int i = 1; i <= n; i++) {
        if ((i & (i - 1)) == 0) bits++;
        res = (res * (1 << bits) + i) % MOD;
    }
    return (int)res;
}
