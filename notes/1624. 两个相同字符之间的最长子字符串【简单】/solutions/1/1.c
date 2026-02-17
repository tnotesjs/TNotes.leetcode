int maxLengthBetweenEqualCharacters(char* s) {
    int first[26];
    for (int i = 0; i < 26; i++) {
        first[i] = -1;
    }
    
    int ans = -1;
    
    for (int i = 0; s[i] != '\0'; i++) {
        int idx = s[i] - 'a';
        if (first[idx] == -1) {
            first[idx] = i;
        } else {
            int len = i - first[idx] - 1;
            if (len > ans) {
                ans = len;
            }
        }
    }
    
    return ans;
}
