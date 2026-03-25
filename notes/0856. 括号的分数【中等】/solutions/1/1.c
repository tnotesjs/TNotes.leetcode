int scoreOfParentheses(char* s) {
    int stack[50], top = 0;
    stack[top++] = 0;
    for (int i = 0; s[i]; i++) {
        if (s[i] == '(') {
            stack[top++] = 0;
        } else {
            int v = stack[--top];
            stack[top - 1] += v > 0 ? 2 * v : 1;
        }
    }
    return stack[0];
}
