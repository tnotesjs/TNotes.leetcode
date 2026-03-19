int lengthOfLongestSubstring(char* s) {
    int len = strlen(s);
    int ans = 0;
    for (int i = 0; i < len; i++) {
        int seen[128] = {0}; // start
        for (int j = i; j < len; j++) {
            // end
            if (seen[(unsigned char)s[j]]) break; // start 右移
            seen[(unsigned char)s[j]] = 1;
            int cur = j - i + 1;
            if (cur > ans) ans = cur;
        }
    }
    return ans;
}
