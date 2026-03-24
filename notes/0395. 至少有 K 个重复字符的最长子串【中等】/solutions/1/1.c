int longestSubstring(char* s, int k) {
    int len = strlen(s);
    if (len < k) return 0;
    int count[26] = {0};
    for (int i = 0; i < len; i++) count[s[i] - 'a']++;
    for (int i = 0; i < len; i++) {
        if (count[s[i] - 'a'] < k) {
            // 按该字符分割
            int maxLen = 0;
            int start = 0;
            for (int j = 0; j <= len; j++) {
                if (j == len || s[j] == s[i]) {
                    if (j > start) {
                        char tmp = s[j]; s[j] = '\0';
                        int sub = longestSubstring(s + start, k);
                        if (sub > maxLen) maxLen = sub;
                        s[j] = tmp;
                    }
                    start = j + 1;
                }
            }
            return maxLen;
        }
    }
    return len;
}
