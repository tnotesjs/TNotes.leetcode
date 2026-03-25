int getValid(char* s, int start, int len, char** results) {
    int cnt = 0;
    char sub[len + 1];
    strncpy(sub, s + start, len);
    sub[len] = '\0';
    if (len == 1 || sub[0] != '0') {
        results[cnt] = (char*)malloc(len + 1);
        strcpy(results[cnt++], sub);
    }
    for (int i = 1; i < len; i++) {
        if (i > 1 && sub[0] == '0') continue;
        if (sub[len - 1] == '0') continue;
        results[cnt] = (char*)malloc(len + 2);
        strncpy(results[cnt], sub, i);
        results[cnt][i] = '.';
        strncpy(results[cnt] + i + 1, sub + i, len - i);
        results[cnt][len + 1] = '\0';
        cnt++;
    }
    return cnt;
}

char** ambiguousCoordinates(char* s, int* returnSize) {
    int n = strlen(s) - 2;
    char* str = s + 1;
    char** res = (char**)malloc(sizeof(char*) * 1000);
    *returnSize = 0;
    char* left[20], *right[20];
    for (int i = 1; i < n; i++) {
        int lCnt = getValid(str, 0, i, left);
        int rCnt = getValid(str, i, n - i, right);
        for (int a = 0; a < lCnt; a++)
            for (int b = 0; b < rCnt; b++) {
                res[*returnSize] = (char*)malloc(strlen(left[a]) + strlen(right[b]) + 5);
                sprintf(res[*returnSize], "(%s, %s)", left[a], right[b]);
                (*returnSize)++;
            }
        for (int a = 0; a < lCnt; a++) free(left[a]);
        for (int b = 0; b < rCnt; b++) free(right[b]);
    }
    return res;
}
