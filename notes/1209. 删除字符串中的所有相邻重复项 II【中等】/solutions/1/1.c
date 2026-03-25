char* removeDuplicates(char* s, int k) {
    int n = strlen(s);
    char* stackC = (char*)malloc(n + 1);
    int* stackN = (int*)malloc(sizeof(int) * (n + 1));
    int top = -1;
    for (int i = 0; i < n; i++) {
        if (top >= 0 && stackC[top] == s[i]) {
            stackN[top]++;
            if (stackN[top] == k) top--;
        } else {
            stackC[++top] = s[i];
            stackN[top] = 1;
        }
    }
    int len = 0;
    for (int i = 0; i <= top; i++) {
        for (int j = 0; j < stackN[i]; j++) {
            stackC[len++] = stackC[i];
        }
    }
    stackC[len] = '\0';
    free(stackN);
    return stackC;
}
