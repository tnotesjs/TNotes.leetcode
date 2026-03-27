int maximumLength(char* s) {
    int top[26][3] = {0};
    int n = strlen(s);
    int i = 0;
    while (i < n) {
        int ch = s[i] - 'a';
        int j = i;
        while (j < n && s[j] == s[i]) j++;
        int len = j - i;
        if (len > top[ch][0]) { top[ch][2] = top[ch][1]; top[ch][1] = top[ch][0]; top[ch][0] = len; }
        else if (len > top[ch][1]) { top[ch][2] = top[ch][1]; top[ch][1] = len; }
        else if (len > top[ch][2]) { top[ch][2] = len; }
        i = j;
    }
    int ans = -1;
    for (int ch = 0; ch < 26; ch++) {
        int a = top[ch][0], b = top[ch][1], c = top[ch][2];
        int v1 = a - 2;
        int v2 = a - 1 < b ? a - 1 : b;
        int v3 = c;
        if (v1 > ans) ans = v1;
        if (v2 > ans) ans = v2;
        if (v3 > ans) ans = v3;
    }
    return ans <= 0 ? -1 : ans;
}
