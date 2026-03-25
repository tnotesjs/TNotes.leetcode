int suffixSum_g[101];
int memo_g[101][101];
int visited_g[101][101];
int n_g;

int dp(int i, int m) {
    if (i >= n_g) return 0;
    if (2 * m >= n_g - i) return suffixSum_g[i];
    if (visited_g[i][m]) return memo_g[i][m];
    visited_g[i][m] = 1;
    int best = 0;
    for (int x = 1; x <= 2 * m; x++) {
        int val = suffixSum_g[i] - dp(i + x, m > x ? m : x);
        if (val > best) best = val;
    }
    memo_g[i][m] = best;
    return best;
}

int stoneGameII(int* piles, int pilesSize) {
    n_g = pilesSize;
    memset(visited_g, 0, sizeof(visited_g));
    suffixSum_g[n_g] = 0;
    for (int i = n_g - 1; i >= 0; i--) {
        suffixSum_g[i] = suffixSum_g[i + 1] + piles[i];
    }
    return dp(0, 1);
}
