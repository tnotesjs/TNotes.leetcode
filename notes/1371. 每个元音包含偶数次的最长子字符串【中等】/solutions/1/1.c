int findTheLongestSubstring(char* s) {
    int first[32];
    memset(first, -2, sizeof(first));
    first[0] = -1;
    int mask = 0, ans = 0;
    const char* vowels = "aeiou";
    for (int i = 0; s[i]; i++) {
        for (int j = 0; j < 5; j++) {
            if (s[i] == vowels[j]) { mask ^= 1 << j; break; }
        }
        if (first[mask] != -2) {
            int len = i - first[mask];
            if (len > ans) ans = len;
        } else {
            first[mask] = i;
        }
    }
    return ans;
}
