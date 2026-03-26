int maximumCostSubstring(char *s, char *chars, int *vals, int valsSize) {
    int val[26];
    for (int i = 0; i < 26; i++) val[i] = i + 1;
    for (int i = 0; i < valsSize; i++) {
        val[chars[i] - 'a'] = vals[i];
    }
    int ans = 0, cur = 0;
    for (int i = 0; s[i]; i++) {
        cur += val[s[i] - 'a'];
        if (cur < 0) cur = 0;
        if (cur > ans) ans = cur;
    }
    return ans;
}
