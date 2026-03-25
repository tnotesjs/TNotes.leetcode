#include <string.h>

int cmpLetterLog(const void* a, const void* b) {
    const char* la = *(const char**)a;
    const char* lb = *(const char**)b;
    const char* ca = strchr(la, ' ') + 1;
    const char* cb = strchr(lb, ' ') + 1;
    int r = strcmp(ca, cb);
    return r ? r : strcmp(la, lb);
}

char** reorderLogFiles(char** logs, int logsSize, int* returnSize) {
    *returnSize = logsSize;
    char** res = malloc(logsSize * sizeof(char*));
    char** letters = malloc(logsSize * sizeof(char*));
    int lc = 0, idx = 0;

    for (int i = 0; i < logsSize; i++) {
        char* content = strchr(logs[i], ' ') + 1;
        if (content[0] >= 'a' && content[0] <= 'z')
            letters[lc++] = logs[i];
    }

    qsort(letters, lc, sizeof(char*), cmpLetterLog);

    for (int i = 0; i < lc; i++) res[idx++] = letters[i];
    for (int i = 0; i < logsSize; i++) {
        char* content = strchr(logs[i], ' ') + 1;
        if (content[0] >= '0' && content[0] <= '9')
            res[idx++] = logs[i];
    }

    free(letters);
    return res;
}
