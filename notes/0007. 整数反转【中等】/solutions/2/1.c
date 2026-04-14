int reverse(int x) {
    long long ans = 0;
    while (x != 0) {
        ans = ans * 10 + x % 10;
        x /= 10;
    }
    if (ans < -2147483648 || ans > 2147483647)
        return 0;
    return (int)ans;
}
