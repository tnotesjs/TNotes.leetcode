char* smallestSubsequence(char* s) {
    int last[26] = {0};
    int len = strlen(s);
    for (int i = 0; i < len; i++) last[s[i] - 'a'] = i;
    int inStack[26] = {0};
    char* stack = malloc(27);
    int top = 0;
    for (int i = 0; i < len; i++) {
        int c = s[i] - 'a';
        if (inStack[c]) continue;
        while (top > 0 && stack[top - 1] - 'a' > c && last[stack[top - 1] - 'a'] > i) {
            inStack[stack[--top] - 'a'] = 0;
        }
        stack[top++] = s[i];
        inStack[c] = 1;
    }
    stack[top] = '\0';
    return stack;
}
