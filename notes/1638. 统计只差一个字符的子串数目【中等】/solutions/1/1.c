int countSubstrings(char* s, char* t) {
    int sLen = strlen(s), tLen = strlen(t);
    int res = 0;
    for (int i = 0; i < sLen; i++)
        for (int j = 0; j < tLen; j++) {
            int diff = 0;
            for (int k = 0; i+k < sLen && j+k < tLen; k++) {
                if (s[i+k] != t[j+k]) diff++;
                if (diff > 1) break;
                if (diff == 1) res++;
            }
        }
    return res;
}
