int cmp(const void* a, const void* b) {
    const char* sa = *(const char**)a;
    const char* sb = *(const char**)b;
    int la = strlen(sa), lb = strlen(sb);
    if (la != lb) return lb - la;
    return strcmp(sa, sb);
}

char* findLongestWord(char* s, char** dictionary, int dictionarySize) {
    qsort(dictionary, dictionarySize, sizeof(char*), cmp);
    int sLen = strlen(s);
    for (int k = 0; k < dictionarySize; k++) {
        int i = 0, wLen = strlen(dictionary[k]);
        for (int j = 0; j < sLen && i < wLen; j++)
            if (s[j] == dictionary[k][i]) i++;
        if (i == wLen) return dictionary[k];
    }
    return "";
}
