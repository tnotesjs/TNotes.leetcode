char* shortestBeautifulSubstring(char* s, int k) {
    int n = strlen(s);
    int ones = 0;
    int bestL = -1, bestLen = n + 1;
    for (int l = 0, r = 0; r < n; r++) {
        ones += s[r] == '1';
        while (ones > k || (ones == k && s[l] == '0')) {
            ones -= s[l] == '1';
            l++;
        }
        if (ones == k) {
            int len = r - l + 1;
            if (len < bestLen || (len == bestLen && strncmp(s + l, s + bestL, len) < 0)) {
                bestL = l;
                bestLen = len;
            }
        }
    }
    if (bestL == -1) {
        char* res = (char*)malloc(1);
        res[0] = '\0';
        return res;
    }
    char* res = (char*)malloc(bestLen + 1);
    strncpy(res, s + bestL, bestLen);
    res[bestLen] = '\0';
    return res;
}
