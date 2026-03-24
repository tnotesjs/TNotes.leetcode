int cmpStr(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

char* longestWord(char** words, int wordsSize) {
    qsort(words, wordsSize, sizeof(char*), cmpStr);
    // 简化实现：用数组存储已确认的单词
    char** set = (char**)malloc(sizeof(char*) * (wordsSize + 1));
    int setSize = 0;
    set[setSize++] = ""; // 空前缀
    char* res = "";
    for (int i = 0; i < wordsSize; i++) {
        int len = strlen(words[i]);
        // 检查 words[i][0..len-2] 是否在 set 中
        int found = 0;
        for (int j = 0; j < setSize; j++) {
            if ((int)strlen(set[j]) == len - 1 && strncmp(set[j], words[i], len - 1) == 0) {
                found = 1; break;
            }
        }
        if (found) {
            set[setSize++] = words[i];
            if (len > (int)strlen(res)) res = words[i];
        }
    }
    free(set);
    return res;
}
