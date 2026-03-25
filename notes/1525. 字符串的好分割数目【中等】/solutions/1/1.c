int numSplits(char* s) {
    int rightCnt[26] = {0}, leftCnt[26] = {0};
    for (int i = 0; s[i]; i++) rightCnt[s[i] - 'a']++;
    int leftUniq = 0, rightUniq = 0;
    for (int i = 0; i < 26; i++) if (rightCnt[i]) rightUniq++;
    int res = 0, n = strlen(s);
    for (int i = 0; i < n - 1; i++) {
        int c = s[i] - 'a';
        if (leftCnt[c] == 0) leftUniq++;
        leftCnt[c]++;
        rightCnt[c]--;
        if (rightCnt[c] == 0) rightUniq--;
        if (leftUniq == rightUniq) res++;
    }
    return res;
}
