char** printVertically(char* s, int* returnSize) {
    char* words[201];
    int lens[201];
    int wc = 0, maxLen = 0;
    char* token = strtok(s, " ");
    while (token) {
        words[wc] = token;
        lens[wc] = strlen(token);
        if (lens[wc] > maxLen) maxLen = lens[wc];
        wc++;
        token = strtok(NULL, " ");
    }
    char** res = malloc(sizeof(char*) * maxLen);
    *returnSize = maxLen;
    for (int i = 0; i < maxLen; i++) {
        res[i] = malloc(sizeof(char) * (wc + 1));
        int last = -1;
        for (int j = 0; j < wc; j++) {
            if (i < lens[j]) {
                res[i][j] = words[j][i];
                last = j;
            } else {
                res[i][j] = ' ';
            }
        }
        res[i][last + 1] = '\0';
    }
    return res;
}
