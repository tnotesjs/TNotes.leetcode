char** removeComments(char** source, int sourceSize, int* returnSize) {
    char** res = (char**)malloc(sizeof(char*) * sourceSize);
    *returnSize = 0;
    int inBlock = 0;
    char line[500];
    int lineLen = 0;
    for (int s = 0; s < sourceSize; s++) {
        if (!inBlock) lineLen = 0;
        int i = 0, len = strlen(source[s]);
        while (i < len) {
            if (inBlock) {
                if (i + 1 < len && source[s][i] == '*' && source[s][i + 1] == '/') {
                    inBlock = 0; i += 2;
                } else {
                    i++;
                }
            } else {
                if (i + 1 < len && source[s][i] == '/' && source[s][i + 1] == '/') {
                    break;
                } else if (i + 1 < len && source[s][i] == '/' && source[s][i + 1] == '*') {
                    inBlock = 1; i += 2;
                } else {
                    line[lineLen++] = source[s][i]; i++;
                }
            }
        }
        if (!inBlock && lineLen > 0) {
            line[lineLen] = '\0';
            res[*returnSize] = (char*)malloc(lineLen + 1);
            strcpy(res[*returnSize], line);
            (*returnSize)++;
        }
    }
    return res;
}
