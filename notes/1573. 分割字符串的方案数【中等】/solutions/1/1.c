int numWays(char* s) {
    long long MOD = 1000000007;
    int n = strlen(s);
    int ones = 0;
    for (int i = 0; i < n; i++) if (s[i] == '1') ones++;
    if (ones % 3 != 0) return 0;
    if (ones == 0) return (int)((long long)(n - 1) % MOD * ((n - 2) % MOD) % MOD * 500000004 % MOD); // modular inverse of 2
    int target = ones / 3;
    long long left = 0, right = 0;
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '1') cnt++;
        if (cnt == target) left++;
        if (cnt == 2 * target) right++;
    }
    return (int)(left * right % MOD);
}
