char* convert(char* s, int numRows) {
    int n = strlen(s);
    int r = numRows;
    if (r == 1 || r >= n)
        return s;

    int t = r * 2 - 2;
    char* ans = (char*)malloc((n + 1) * sizeof(char));
    int idx = 0;

    for (int i = 0; i < r; i++) {            // 枚举行
        for (int j = 0; j + i < n; j += t) { // 枚举每个周期的起始下标
            ans[idx++] = s[j + i];           // 当前周期第一个字符
            if (i > 0 && i < r - 1 && j + t - i < n) {
                ans[idx++] = s[j + t - i]; // 当前周期第二个字符
            }
        }
    }
    ans[idx] = '\0';
    return ans;
}
