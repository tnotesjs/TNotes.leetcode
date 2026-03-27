// memo 数组，-1 表示未计算
int memo[20001];
int y_val;

int dfs(int val) {
    if (val <= y_val) return y_val - val;
    if (memo[val] != -1) return memo[val];
    int res = val - y_val;
    int t;
    t = (val % 5) + 1 + dfs(val / 5);
    if (t < res) res = t;
    t = (5 - val % 5) + 1 + dfs(val / 5 + 1);
    if (t < res) res = t;
    t = (val % 11) + 1 + dfs(val / 11);
    if (t < res) res = t;
    t = (11 - val % 11) + 1 + dfs(val / 11 + 1);
    if (t < res) res = t;
    memo[val] = res;
    return res;
}

int minimumOperationsToMakeEqual(int x, int y) {
    if (x <= y) return y - x;
    y_val = y;
    memset(memo, -1, sizeof(memo));
    return dfs(x);
}
