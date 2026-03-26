char* repeatLimitedString(char* s, int repeatLimit) {
    int freq[26] = {0};
    int n = strlen(s);
    for (int i = 0; i < n; i++) freq[s[i] - 'a']++;
    char* res = (char*)malloc(n + 1);
    int idx = 0;
    int i = 25;
    while (i >= 0) {
        if (freq[i] == 0) { i--; continue; }
        int count = freq[i] < repeatLimit ? freq[i] : repeatLimit;
        for (int k = 0; k < count; k++) res[idx++] = 'a' + i;
        freq[i] -= count;
        if (freq[i] > 0) {
            int j = i - 1;
            while (j >= 0 && freq[j] == 0) j--;
            if (j < 0) break;
            res[idx++] = 'a' + j;
            freq[j]--;
        } else {
            i--;
        }
    }
    res[idx] = '\0';
    return res;
}
