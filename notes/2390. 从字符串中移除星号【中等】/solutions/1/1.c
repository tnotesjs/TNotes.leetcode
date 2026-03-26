char* removeStars(char* s) {
    int n = strlen(s);
    char* result = (char*)malloc(n + 1);
    int top = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '*') {
            top--;
        } else {
            result[top++] = s[i];
        }
    }
    result[top] = '\0';
    return result;
}
