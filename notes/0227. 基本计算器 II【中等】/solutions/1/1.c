int calculate(char* s) {
    int len = strlen(s);
    int* stack = (int*)malloc(sizeof(int) * (len + 1));
    int top = 0;
    long num = 0;
    char sign = '+';
    for (int i = 0; i <= len; i++) {
        char ch = (i < len) ? s[i] : '\0';
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch - '0');
        }
        if ((ch != ' ' && (ch < '0' || ch > '9')) || i == len) {
            if (sign == '+') stack[top++] = (int)num;
            else if (sign == '-') stack[top++] = (int)(-num);
            else if (sign == '*') stack[top - 1] *= (int)num;
            else if (sign == '/') stack[top - 1] /= (int)num;
            sign = ch;
            num = 0;
        }
    }
    int result = 0;
    for (int i = 0; i < top; i++) result += stack[i];
    free(stack);
    return result;
}
