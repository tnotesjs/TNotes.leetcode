int knightDialer(int n) {
    long long MOD = 1000000007;
    int moves[10][3] = {
        {4, 6, -1}, {6, 8, -1}, {7, 9, -1}, {4, 8, -1}, {0, 3, 9},
        {-1, -1, -1}, {0, 1, 7}, {2, 6, -1}, {1, 3, -1}, {2, 4, -1}
    };
    int moveCnt[10] = {2, 2, 2, 2, 3, 0, 3, 2, 2, 2};

    long long dp[10], next[10];
    for (int i = 0; i < 10; i++) dp[i] = 1;

    for (int step = 1; step < n; step++) {
        for (int i = 0; i < 10; i++) next[i] = 0;
        for (int i = 0; i < 10; i++) {
            for (int m = 0; m < moveCnt[i]; m++) {
                next[i] = (next[i] + dp[moves[i][m]]) % MOD;
            }
        }
        for (int i = 0; i < 10; i++) dp[i] = next[i];
    }

    long long res = 0;
    for (int i = 0; i < 10; i++) res = (res + dp[i]) % MOD;
    return (int)res;
}
