char* simplifyPath(char* path) {
    int len = strlen(path);
    char** stack = (char**)malloc(sizeof(char*) * len);
    int top = 0;

    char* token = strtok(path, "/");
    while (token) {
        if (strcmp(token, "..") == 0) {
            if (top > 0) top--; // 返回上一级
        } else if (strcmp(token, ".") != 0 && strlen(token) > 0) {
            stack[top++] = token; // 有效目录名入栈
        }
        token = strtok(NULL, "/");
    }

    char* result = (char*)malloc(sizeof(char) * (len + 1));
    result[0] = '\0';
    if (top == 0) {
        strcat(result, "/");
    } else {
        for (int i = 0; i < top; i++) {
            strcat(result, "/");
            strcat(result, stack[i]);
        }
    }
    free(stack);
    return result;
}
