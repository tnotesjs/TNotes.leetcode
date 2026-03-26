int takeCharacters(char* s, int k) {
    int n = strlen(s);
    int total[3] = {0};
    for (int i = 0; i < n; i++) total[s[i] - 'a']++;
    if (total[0] < k || total[1] < k || total[2] < k) return -1;

    int cnt[3] = {0};
    int maxWin = 0, l = 0;
    for (int r = 0; r < n; r++) {
        cnt[s[r] - 'a']++;
        while (total[0] - cnt[0] < k || total[1] - cnt[1] < k || total[2] - cnt[2] < k) {
            cnt[s[l] - 'a']--;
            l++;
        }
        if (r - l + 1 > maxWin) maxWin = r - l + 1;
    }
    return n - maxWin;
}
