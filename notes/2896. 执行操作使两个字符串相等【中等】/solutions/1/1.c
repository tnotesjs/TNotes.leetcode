#define INF 0x3f3f3f3f

int minOperations(char* s1, char* s2, int x) {
    int n = strlen(s1);
    int diff[501];
    int m = 0;
    for (int i = 0; i < n; i++) {
        if (s1[i] != s2[i]) diff[m++] = i;
    }
    if (m % 2 != 0) return -1;
    if (m == 0) return 0;
    // 滚动 DP
    int pp0 = 0, pp1 = INF;
    int p0 = INF, p1 = 0;
    for (int i = 2; i <= m; i++) {
        int cost = diff[i - 1] - diff[i - 2];
        if (x < cost) cost = x;
        int c0 = p1 + x < pp0 + cost ? p1 + x : pp0 + cost;
        int c1 = p0 < pp1 + cost ? p0 : pp1 + cost;
        pp0 = p0; pp1 = p1;
        p0 = c0; p1 = c1;
    }
    return p0;
}
