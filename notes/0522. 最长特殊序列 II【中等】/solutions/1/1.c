bool isSub(char* a, char* b) {
    int i = 0, la = strlen(a), lb = strlen(b);
    for (int j = 0; j < lb && i < la; j++)
        if (a[i] == b[j]) i++;
    return i == la;
}

int findLUSlength(char** strs, int strsSize) {
    int res = -1;
    for (int i = 0; i < strsSize; i++) {
        int unique = 1;
        for (int j = 0; j < strsSize; j++) {
            if (i != j && isSub(strs[i], strs[j])) { unique = 0; break; }
        }
        if (unique) {
            int len = strlen(strs[i]);
            if (len > res) res = len;
        }
    }
    return res;
}
