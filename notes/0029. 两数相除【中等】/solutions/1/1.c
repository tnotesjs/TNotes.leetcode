int divide(int dividend, int divisor) {
    // 唯一溢出情况：-2^31 / -1 = 2^31 超出 INT_MAX
    if (dividend == INT_MIN && divisor == -1) return INT_MAX;

    int sign = (dividend > 0) == (divisor > 0) ? 1 : -1;
    // 全转为负数操作，避免 -2^31 取绝对値溢出
    long long a = dividend > 0 ? -(long long)dividend : (long long)dividend;
    long long b = divisor  > 0 ? -(long long)divisor  : (long long)divisor;
    int ans = 0;

    while (a <= b) {
        long long temp = b;
        int cnt = 1;
        // 倍增加速：找到最大的 2^k 使得 temp*2^k >= a
        while (a - temp <= temp) {
            temp <<= 1;
            cnt <<= 1;
        }
        a -= temp;
        ans += cnt;
    }

    return sign == 1 ? ans : -ans;
}
