char* decodeString(char* s) {
    int len = strlen(s);
    int numStack[100], numTop = 0;
    char* strStack[100];
    int strTop = 0;
    char* cur = (char*)calloc(10000, 1);
    int num = 0;
    for (int i = 0; i < len; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            num = num * 10 + (s[i] - '0');
        } else if (s[i] == '[') {
            numStack[numTop++] = num;
            strStack[strTop++] = cur;
            cur = (char*)calloc(10000, 1);
            num = 0;
        } else if (s[i] == ']') {
            int repeat = numStack[--numTop];
            char* prev = strStack[--strTop];
            char* tmp = (char*)calloc(10000, 1);
            strcpy(tmp, prev);
            for (int j = 0; j < repeat; j++) strcat(tmp, cur);
            free(cur);
            cur = tmp;
        } else {
            int cl = strlen(cur);
            cur[cl] = s[i];
            cur[cl + 1] = '\0';
        }
    }
    return cur;
}
