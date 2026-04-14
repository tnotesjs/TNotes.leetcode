int reverse(int x) {
    char buf[12];
    sprintf(buf, "%d", x);

    int start = (buf[0] == '-') ? 1 : 0;
    int end = strlen(buf) - 1;
    while (start < end) {
        char tmp = buf[start];
        buf[start++] = buf[end];
        buf[end--] = tmp;
    }

    long long ans = atoll(buf);
    if (ans < -2147483648 || ans > 2147483647)
        return 0;
    return (int)ans;
}
