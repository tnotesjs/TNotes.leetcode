int* memo;

bool dfs(int maxN, int used, int remain) {
    if (memo[used] != -1) return memo[used];
    for (int i = 1; i <= maxN; i++) {
        if (used & (1 << i)) continue;
        if (i >= remain || !dfs(maxN, used | (1 << i), remain - i)) {
            memo[used] = 1;
            return true;
        }
    }
    memo[used] = 0;
    return false;
}

bool canIWin(int maxChoosableInteger, int desiredTotal) {
    if ((long long)maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;
    if (desiredTotal <= 0) return true;
    int size = 1 << (maxChoosableInteger + 1);
    memo = (int*)malloc(sizeof(int) * size);
    memset(memo, -1, sizeof(int) * size);
    bool res = dfs(maxChoosableInteger, 0, desiredTotal);
    free(memo);
    return res;
}
