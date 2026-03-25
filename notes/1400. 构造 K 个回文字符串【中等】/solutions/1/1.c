bool canConstruct(char* s, int k) {
    int n = strlen(s);
    if (k > n) return false;
    int cnt[26] = {0};
    for (int i = 0; i < n; i++) cnt[s[i] - 'a']++;
    int odd = 0;
    for (int i = 0; i < 26; i++) if (cnt[i] % 2 == 1) odd++;
    return odd <= k;
}
