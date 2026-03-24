int findNthDigit(int n) {
    long long digits = 1, start = 1, count = 9;
    while (n > digits * count) {
        n -= digits * count;
        digits++;
        start *= 10;
        count *= 10;
    }
    long long num = start + (n - 1) / digits;
    int idx = (n - 1) % digits;
    // 取第 idx 位数字
    for (int i = digits - 1 - idx; i > 0; i--) num /= 10;
    return num % 10;
}
