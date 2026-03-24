char* reorganizeString(char* s) {
    int freq[26] = {0};
    int n = strlen(s);
    for (int i = 0; i < n; i++) freq[s[i] - 'a']++;
    int maxFreq = 0, maxChar = 0;
    for (int i = 0; i < 26; i++) {
        if (freq[i] > maxFreq) { maxFreq = freq[i]; maxChar = i; }
    }
    if (maxFreq > (n + 1) / 2) return "";
    char* res = (char*)malloc(n + 1);
    res[n] = '\0';
    int idx = 0;
    while (freq[maxChar] > 0) {
        res[idx] = maxChar + 'a';
        freq[maxChar]--;
        idx += 2;
    }
    for (int i = 0; i < 26; i++) {
        while (freq[i] > 0) {
            if (idx >= n) idx = 1;
            res[idx] = i + 'a';
            freq[i]--;
            idx += 2;
        }
    }
    return res;
}
