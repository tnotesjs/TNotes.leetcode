int numSub(char* s) {
    long long MOD = 1000000007;
    long long res = 0, count = 0;
    for (int i = 0; s[i]; i++) {
        count = s[i] == '1' ? count + 1 : 0;
        res = (res + count) % MOD;
    }
    return (int)res;
}
