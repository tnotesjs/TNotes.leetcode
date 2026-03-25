char* arrangeWords(char* text) {
    int n = strlen(text);
    text[0] = text[0] - 'A' + 'a'; // 首字母转小写
    // 收集单词
    char* words[100001];
    int lens[100001], cnt = 0;
    char* tok = strtok(text, " ");
    while (tok) {
        words[cnt] = tok;
        lens[cnt] = strlen(tok);
        cnt++;
        tok = strtok(NULL, " ");
    }
    // 稳定排序（插入排序）
    for (int i = 1; i < cnt; i++) {
        char* tw = words[i]; int tl = lens[i];
        int j = i - 1;
        while (j >= 0 && lens[j] > tl) {
            words[j+1] = words[j]; lens[j+1] = lens[j]; j--;
        }
        words[j+1] = tw; lens[j+1] = tl;
    }
    // 拼接结果
    char* res = (char*)malloc(n + 1);
    int pos = 0;
    for (int i = 0; i < cnt; i++) {
        if (i > 0) res[pos++] = ' ';
        int l = lens[i];
        memcpy(res + pos, words[i], l);
        pos += l;
    }
    res[0] = res[0] - 'a' + 'A';
    res[pos] = '\0';
    return res;
}
