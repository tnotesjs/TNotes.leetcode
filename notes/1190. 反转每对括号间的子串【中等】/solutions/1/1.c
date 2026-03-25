char* reverseParentheses(char* s) {
    int n = strlen(s);
    char* result = (char*)malloc(n + 1);
    int stack[n];
    int top = -1, len = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') {
            stack[++top] = len;
        } else if (s[i] == ')') {
            int start = stack[top--];
            int left = start, right = len - 1;
            while (left < right) {
                char tmp = result[left];
                result[left] = result[right];
                result[right] = tmp;
                left++; right--;
            }
        } else {
            result[len++] = s[i];
        }
    }
    result[len] = '\0';
    return result;
}
