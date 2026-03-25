char* minRemoveToMakeValid(char* s) {
    int n = strlen(s);
    int* stack = malloc(sizeof(int) * n);
    int top = 0;
    char* remove = calloc(n, sizeof(char));
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') {
            stack[top++] = i;
        } else if (s[i] == ')') {
            if (top > 0) {
                top--;
            } else {
                remove[i] = 1;
            }
        }
    }
    for (int i = 0; i < top; i++) remove[stack[i]] = 1;
    char* res = malloc(sizeof(char) * (n + 1));
    int idx = 0;
    for (int i = 0; i < n; i++) {
        if (!remove[i]) res[idx++] = s[i];
    }
    res[idx] = '\0';
    free(stack);
    free(remove);
    return res;
}
