int longestSemiRepetitiveSubstring(char* s) {
    int n = strlen(s);
    int left = 0, res = 1, count = 0;
    for (int right = 1; right < n; right++) {
        if (s[right] == s[right - 1]) count++;
        while (count > 1) {
            left++;
            if (s[left] == s[left - 1]) count--;
        }
        if (right - left + 1 > res) res = right - left + 1;
    }
    return res;
}
