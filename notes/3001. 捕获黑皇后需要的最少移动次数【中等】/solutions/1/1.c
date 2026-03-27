int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
    // 车和皇后同行
    if (a == e) {
        int lo = b < f ? b : f, hi = b > f ? b : f;
        if (!(c == a && lo < d && d < hi)) return 1;
    }
    // 车和皇后同列
    if (b == f) {
        int lo = a < e ? a : e, hi = a > e ? a : e;
        if (!(d == b && lo < c && c < hi)) return 1;
    }
    // 象和皇后同对角线
    if (abs(c - e) == abs(d - f)) {
        int lo = c < e ? c : e, hi = c > e ? c : e;
        int blocked;
        if (c - d == e - f) {
            blocked = (a - b == c - d) && lo < a && a < hi;
        } else {
            blocked = (a + b == c + d) && lo < a && a < hi;
        }
        if (!blocked) return 1;
    }
    return 2;
}
