bool checkInclusion(char* s1, char* s2) {
    int len1 = strlen(s1), len2 = strlen(s2);
    if (len1 > len2) return false;
    int cnt[26] = {0};
    for (int i = 0; i < len1; i++) {
        cnt[s1[i] - 'a']++;
        cnt[s2[i] - 'a']--;
    }
    int diff = 0;
    for (int i = 0; i < 26; i++) if (cnt[i] != 0) diff++;
    if (diff == 0) return true;
    for (int i = len1; i < len2; i++) {
        int r = s2[i] - 'a', l = s2[i - len1] - 'a';
        if (cnt[r] == 0) diff++;
        cnt[r]--;
        if (cnt[r] == 0) diff--;
        if (cnt[l] == 0) diff++;
        cnt[l]++;
        if (cnt[l] == 0) diff--;
        if (diff == 0) return true;
    }
    return false;
}
