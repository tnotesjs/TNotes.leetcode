char* smallestNumber(char* pattern) {
    int n = strlen(pattern);
    char* result = (char*)malloc(n + 2);
    int stack[10], top = 0, idx = 0;
    for (int i = 0; i <= n; i++) {
        stack[top++] = i + 1;
        if (i == n || pattern[i] == 'I') {
            while (top > 0) result[idx++] = '0' + stack[--top];
        }
    }
    result[idx] = '\0';
    return result;
}
