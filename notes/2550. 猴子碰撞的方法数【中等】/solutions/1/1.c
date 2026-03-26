int monkeyMove(int n) {
    long long mod = 1000000007;
    long long base = 2, exp = n, result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = result * base % mod;
        base = base * base % mod;
        exp >>= 1;
    }
    return (int)((result - 2 + mod) % mod);
}
