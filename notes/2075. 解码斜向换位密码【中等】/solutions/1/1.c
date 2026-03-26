char* decodeCiphertext(char* encodedText, int rows) {
    int len = strlen(encodedText);
    if (rows == 1) {
        char* res = (char*)malloc((len + 1) * sizeof(char));
        strcpy(res, encodedText);
        return res;
    }
    int cols = len / rows;
    char* res = (char*)malloc((len + 1) * sizeof(char));
    int idx = 0;
    for (int start = 0; start < cols; start++) {
        for (int r = 0; r < rows && start + r < cols; r++) {
            res[idx++] = encodedText[r * cols + start + r];
        }
    }
    // 去除尾部空格
    while (idx > 0 && res[idx - 1] == ' ') idx--;
    res[idx] = '\0';
    return res;
}
