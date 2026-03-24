int evalRPN(char** tokens, int tokensSize) {
    int* stack = (int*)malloc(sizeof(int) * tokensSize);
    int top = 0;
    for (int i = 0; i < tokensSize; i++) {
        char* t = tokens[i];
        if ((t[0] == '-' && t[1] != '\0') || (t[0] >= '0' && t[0] <= '9')) {
            stack[top++] = atoi(t);
        } else {
            int b = stack[--top];
            int a = stack[--top];
            if (t[0] == '+') stack[top++] = a + b;
            else if (t[0] == '-') stack[top++] = a - b;
            else if (t[0] == '*') stack[top++] = a * b;
            else stack[top++] = a / b; // C 整数除法默认截断向零
        }
    }
    int res = stack[0];
    free(stack);
    return res;
}
