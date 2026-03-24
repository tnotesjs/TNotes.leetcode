char* removeKdigits(char* num, int k) {
    int len = strlen(num);
    char* stack = (char*)malloc(len + 1);
    int top = 0;
    for (int i = 0; i < len; i++) {
        while (k > 0 && top > 0 && stack[top - 1] > num[i]) { top--; k--; }
        stack[top++] = num[i];
    }
    top -= k;
    // 去前导零
    int start = 0;
    while (start < top - 1 && stack[start] == '0') start++;
    stack[top] = '\0';
    char* res = (char*)malloc(top - start + 1);
    strcpy(res, stack + start);
    free(stack);
    return res;
}
