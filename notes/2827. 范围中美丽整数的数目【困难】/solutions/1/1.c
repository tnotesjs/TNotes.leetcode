int k_val;
char digits[12];
int n;
long long memo[11][2][20][22][2];
int visited[11][2][20][22][2];
int vid;

long long dp(int pos, int tight, int mod, int diff, int started) {
    if (pos == n) return started && mod == 0 && diff == 10 ? 1 : 0;
    if (visited[pos][tight][mod][diff][started] == vid)
        return memo[pos][tight][mod][diff][started];
    visited[pos][tight][mod][diff][started] = vid;
    int limit = tight ? digits[pos] - '0' : 9;
    long long res = 0;
    for (int d = 0; d <= limit; d++) {
        int nt = tight && d == limit;
        if (!started && d == 0) {
            res += dp(pos + 1, nt, 0, 10, 0);
        } else {
            int nm = (mod * 10 + d) % k_val;
            int nd = diff + (d % 2 == 0 ? 1 : -1);
            res += dp(pos + 1, nt, nm, nd, 1);
        }
    }
    memo[pos][tight][mod][diff][started] = res;
    return res;
}

long long countBeautiful(long long num) {
    if (num <= 0) return 0;
    n = sprintf(digits, "%lld", num);
    vid++;
    return dp(0, 1, 0, 10, 0);
}

int numberOfBeautifulIntegers(int low, int high, int k) {
    k_val = k;
    vid = 0;
    memset(visited, 0, sizeof(visited));
    return (int)(countBeautiful(high) - countBeautiful((long long)low - 1));
}
