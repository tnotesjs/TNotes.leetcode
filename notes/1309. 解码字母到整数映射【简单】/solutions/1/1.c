char* freqAlphabets(char* s) {
    int len = strlen(s);
    char* res = (char*)malloc((len + 1) * sizeof(char));
    int idx = 0;

    for (int i = len - 1; i >= 0;) {
        if (s[i] == '#') {
            int num = (s[i - 2] - '0') * 10 + (s[i - 1] - '0');
            res[idx++] = 'a' + num - 1;
            i -= 3;
        } else {
            int num = s[i] - '0';
            res[idx++] = 'a' + num - 1;
            i -= 1;
        }
    }

    res[idx] = '\0';

    // 反转字符串
    for (int i = 0; i < idx / 2; i++) {
        char temp = res[i];
        res[i] = res[idx - 1 - i];
        res[idx - 1 - i] = temp;
    }

    return res;
}
