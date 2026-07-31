char* convertToTitle(int columnNumber) {
    // 2^31-1 转二十六进制最长 7 位，预留 '\0'
    char buf[16];
    int i = 15;
    buf[i] = '\0';
    while (columnNumber > 0) {
        // 1-indexed → 0-indexed，才能按普通 26 进制取模
        columnNumber--;
        buf[--i] = 'A' + (columnNumber % 26);
        columnNumber /= 26;
    }
    char* res = (char*)malloc(16 - i);
    strcpy(res, buf + i);
    return res;
}
