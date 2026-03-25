bool isValid(char* s) {
    int len = strlen(s);
    char* stack = malloc(len);
    int top = 0;
    for (int i = 0; i < len; i++) {
        if (s[i] == 'c') {
            if (top >= 2 && stack[top - 1] == 'b' && stack[top - 2] == 'a') {
                top -= 2;
            } else {
                free(stack);
                return false;
            }
        } else {
            stack[top++] = s[i];
        }
    }
    free(stack);
    return top == 0;
}
