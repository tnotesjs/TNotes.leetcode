int monotoneIncreasingDigits(int n) {
    char s[12];
    sprintf(s, "%d", n);
    int len = strlen(s), mark = len;
    for (int i = len - 1; i > 0; i--) {
        if (s[i] < s[i - 1]) {
            mark = i;
            s[i - 1]--;
        }
    }
    for (int i = mark; i < len; i++) s[i] = '9';
    return atoi(s);
}
