int findSubstringInWraproundString(char* s) {
    int maxLen[26] = {0};
    int len = 1, n = strlen(s);
    for (int i = 0; i < n; i++) {
        if (i > 0 && (s[i] - s[i - 1] + 26) % 26 == 1) len++;
        else len = 1;
        int idx = s[i] - 'a';
        if (len > maxLen[idx]) maxLen[idx] = len;
    }
    int res = 0;
    for (int i = 0; i < 26; i++) res += maxLen[i];
    return res;
}
