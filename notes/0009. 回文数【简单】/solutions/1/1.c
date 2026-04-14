bool isPalindrome(int x) {
    if (x < 0)
        return false;
    char buf[12];
    sprintf(buf, "%d", x);
    int n = strlen(buf);
    // 反转字符串
    char rev[12];
    for (int i = 0; i < n; i++)
        rev[i] = buf[n - 1 - i];
    rev[n] = '\0';
    return strcmp(buf, rev) == 0;
}
