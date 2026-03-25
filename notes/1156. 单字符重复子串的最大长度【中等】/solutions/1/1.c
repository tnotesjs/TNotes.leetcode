int maxRepOpt1(char* text) {
    int n = strlen(text);
    int freq[26] = {0};
    for (int i = 0; i < n; i++) freq[text[i] - 'a']++;
    int gc[n], gl[n], gn = 0;
    int i = 0;
    while (i < n) {
        int j = i;
        while (j < n && text[j] == text[i]) j++;
        gc[gn] = text[i] - 'a';
        gl[gn] = j - i;
        gn++;
        i = j;
    }
    int ans = 0;
    for (int g = 0; g < gn; g++) {
        int c = gc[g], len = gl[g];
        int val = len + 1 < freq[c] ? len + 1 : freq[c];
        if (val > ans) ans = val;
        if (g + 2 < gn && gl[g + 1] == 1 && gc[g + 2] == c) {
            val = len + gl[g + 2] + 1;
            if (val > freq[c]) val = freq[c];
            if (val > ans) ans = val;
        }
    }
    return ans;
}
