int divide(int dividend, int divisor) {
    // 唯一溢出情况：-2^31 / -1 = 2^31 超出 INT_MAX
    if (dividend == INT_MIN && divisor == -1)
        return INT_MAX;

    int sign = (dividend > 0) == (divisor > 0) ? 1 : -1;
    // 全转为负数操作，避免 -2^31 取绝对値溢出
    long long a = dividend > 0 ? -(long long)dividend : (long long)dividend;
    long long b = divisor > 0 ? -(long long)divisor : (long long)divisor;
    long long ans = 0;

    while (a <= b) {
        long long temp = b;
        long long cnt = 1;
        // 倍增加速：只要当前 temp 再翻倍后仍然 >= a，就继续翻倍
        while (a - temp <= temp) {
            temp += temp; // 不能用 temp <<= 1，因为 temp 为负数，负数左移是 C
                          // 语言标准中的未定义行为
            cnt += cnt;
        }
        a -= temp;
        ans += cnt;
    }

    return sign == 1 ? (int)ans : (int)-ans;
}
