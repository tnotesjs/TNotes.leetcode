void centerSpread(char* s, int len, int l, int r, int* start, int* maxLen) {
    while (l >= 0 && r < len && s[l] == s[r]) {
        l--;
        r++;
    }
    // 回退一步到最后匹配位置
    l++;
    r--;
    int curLen = r - l + 1;
    if (curLen > *maxLen) {
        *maxLen = curLen;
        *start = l;
    }
}

char* longestPalindrome(char* s) {
    int len = strlen(s);
    if (len < 2) return s;

    int start = 0, maxLen = 1;
    for (int i = 0; i < len - 1; i++) {
        centerSpread(s, len, i, i,     &start, &maxLen); // 奇数中心
        centerSpread(s, len, i, i + 1, &start, &maxLen); // 偶数中心
    }

    char* ans = (char*)malloc((maxLen + 1) * sizeof(char));
    strncpy(ans, s + start, maxLen);
    ans[maxLen] = '\0';
    return ans;
}
