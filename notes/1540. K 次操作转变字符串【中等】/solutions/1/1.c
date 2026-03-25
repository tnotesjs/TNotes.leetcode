bool canConvertString(char* s, char* t, int k) {
    int sLen = strlen(s), tLen = strlen(t);
    if (sLen != tLen) return false;
    int cnt[26] = {0};
    for (int i = 0; i < sLen; i++) {
        int diff = (t[i] - s[i] + 26) % 26;
        if (diff > 0) cnt[diff]++;
    }
    for (int i = 1; i < 26; i++)
        if (cnt[i] > 0 && i + 26 * (cnt[i] - 1) > k) return false;
    return true;
}
