void reverseStr(char* s, int n) {
    for (int i = 0; i < n / 2; i++) { char t = s[i]; s[i] = s[n-1-i]; s[n-1-i] = t; }
}

int cmpStr(const void* a, const void* b) { return strcmp(*(char**)a, *(char**)b); }

int minimumLengthEncoding(char** words, int wordsSize) {
    char** rev = (char**)malloc(sizeof(char*) * wordsSize);
    for (int i = 0; i < wordsSize; i++) {
        int len = strlen(words[i]);
        rev[i] = (char*)malloc(len + 1);
        strcpy(rev[i], words[i]);
        reverseStr(rev[i], len);
    }
    qsort(rev, wordsSize, sizeof(char*), cmpStr);
    int res = 0;
    for (int i = 0; i < wordsSize; i++) {
        if (i + 1 < wordsSize && strncmp(rev[i], rev[i+1], strlen(rev[i])) == 0) continue;
        res += strlen(rev[i]) + 1;
    }
    for (int i = 0; i < wordsSize; i++) free(rev[i]);
    free(rev);
    return res;
}
