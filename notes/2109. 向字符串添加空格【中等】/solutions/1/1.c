char* addSpaces(char* s, int* spaces, int spacesSize) {
    int n = strlen(s);
    char* res = (char*)malloc(n + spacesSize + 1);
    int j = 0, k = 0;
    for (int i = 0; i < n; i++) {
        if (j < spacesSize && i == spaces[j]) {
            res[k++] = ' ';
            j++;
        }
        res[k++] = s[i];
    }
    res[k] = '\0';
    return res;
}
