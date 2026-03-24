int lengthLongestPath(char* input) {
    int stack[10000], top = 0, maxLen = 0;
    char* line = strtok(input, "\n");
    while (line) {
        int depth = 0;
        while (line[depth] == '\t') depth++;
        char* name = line + depth;
        int nameLen = strlen(name);
        while (top > depth) top--;
        int curLen = (top > 0 ? stack[top - 1] + 1 : 0) + nameLen;
        if (strchr(name, '.')) {
            if (curLen > maxLen) maxLen = curLen;
        }
        stack[top++] = curLen;
        line = strtok(NULL, "\n");
    }
    return maxLen;
}
