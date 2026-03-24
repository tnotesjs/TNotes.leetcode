char* removeDuplicateLetters(char* s) {
    int lastIndex[26] = {0};
    int len = strlen(s);
    for (int i = 0; i < len; i++) lastIndex[s[i] - 'a'] = i;
    char* stack = (char*)malloc(27);
    bool inStack[26] = {false};
    int top = 0;
    for (int i = 0; i < len; i++) {
        int c = s[i] - 'a';
        if (inStack[c]) continue;
        while (top > 0 && stack[top - 1] > s[i] && lastIndex[stack[top - 1] - 'a'] > i) {
            inStack[stack[--top] - 'a'] = false;
        }
        stack[top++] = s[i];
        inStack[c] = true;
    }
    stack[top] = '\0';
    return stack;
}
