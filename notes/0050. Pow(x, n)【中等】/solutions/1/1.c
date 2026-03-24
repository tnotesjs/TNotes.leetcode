double myPow(double x, int n) {
    long long N = n; // 避免 n = INT_MIN 时取反溢出
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    double result = 1.0;
    while (N > 0) {
        if (N & 1) result *= x; // 当前位为 1，累乘当前底数
        x *= x; // 底数平方
        N >>= 1;
    }
    return result;
}
