char* interpret(char* command) {
    int len = strlen(command);
    char* res = (char*)malloc(len + 1);
    int j = 0;
    for (int i = 0; i < len; ) {
        if (command[i] == 'G') {
            res[j++] = 'G';
            i += 1;
        } else if (command[i + 1] == ')') {
            res[j++] = 'o';
            i += 2;
        } else {
            res[j++] = 'a';
            res[j++] = 'l';
            i += 4;
        }
    }
    res[j] = '\0';
    return res;
}
