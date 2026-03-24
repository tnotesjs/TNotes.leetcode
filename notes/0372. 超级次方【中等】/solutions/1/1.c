long long powMod(long long base, int exp, int mod) {
    base %= mod;
    long long result = 1;
    while (exp > 0) {
        if (exp % 2 == 1) result = result * base % mod;
        base = base * base % mod;
        exp /= 2;
    }
    return result;
}

int superPow(int a, int* b, int bSize) {
    int mod = 1337;
    long long result = 1;
    for (int i = 0; i < bSize; i++) {
        result = powMod(result, 10, mod) * powMod(a, b[i], mod) % mod;
    }
    return (int)result;
}
