double memo[201][201];
bool visited[201][201];

double dp(int a, int b) {
    if (a <= 0 && b <= 0) return 0.5;
    if (a <= 0) return 1.0;
    if (b <= 0) return 0.0;
    if (visited[a][b]) return memo[a][b];
    visited[a][b] = true;
    memo[a][b] = 0.25 * (dp(a-4,b) + dp(a-3,b-1) + dp(a-2,b-2) + dp(a-1,b-3));
    return memo[a][b];
}

double soupServings(int n) {
    n = (n + 24) / 25;
    if (n >= 200) return 1.0;
    memset(visited, false, sizeof(visited));
    return dp(n, n);
}
