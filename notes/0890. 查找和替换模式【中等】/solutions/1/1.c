bool match(char* word, char* pattern) {
    int n = strlen(word);
    if (n != (int)strlen(pattern)) return false;
    char w2p[128] = {0}, p2w[128] = {0};
    for (int i = 0; i < n; i++) {
        char w = word[i], p = pattern[i];
        if (w2p[(int)w] && w2p[(int)w] != p) return false;
        if (p2w[(int)p] && p2w[(int)p] != w) return false;
        w2p[(int)w] = p; p2w[(int)p] = w;
    }
    return true;
}

char** findAndReplacePattern(char** words, int wordsSize, char* pattern, int* returnSize) {
    char** res = (char**)malloc(sizeof(char*) * wordsSize);
    *returnSize = 0;
    for (int i = 0; i < wordsSize; i++)
        if (match(words[i], pattern)) res[(*returnSize)++] = words[i];
    return res;
}
