// 简化实现，使用排序 + 前缀匹配
int cmpStr(const void* a, const void* b) { return strcmp(*(char**)a, *(char**)b); }

char* replaceWords(char** dictionary, int dictionarySize, char* sentence) {
    qsort(dictionary, dictionarySize, sizeof(char*), cmpStr);
    char* res = (char*)malloc(strlen(sentence) + 1);
    int pos = 0;
    char* token = strtok(sentence, " ");
    int first = 1;
    while (token) {
        if (!first) res[pos++] = ' ';
        first = 0;
        char* best = token;
        for (int i = 0; i < dictionarySize; i++) {
            int len = strlen(dictionary[i]);
            if (strncmp(token, dictionary[i], len) == 0) {
                if (strlen(best) == strlen(token) || len < strlen(best))
                    best = dictionary[i];
            }
        }
        strcpy(res + pos, best);
        pos += strlen(best);
        token = strtok(NULL, " ");
    }
    res[pos] = '\0';
    return res;
}
