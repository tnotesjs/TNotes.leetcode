char* countAndSay(int n) {
    // 初始化第 1 项
    char* cur = (char*)malloc(2);
    cur[0] = '1';
    cur[1] = '\0';

    for (int i = 1; i < n; i++) {
        int len = strlen(cur);
        // 每轮生成的字符串最长为 2*len
        char* next = (char*)malloc(2 * len + 2);
        int pos = 0, j = 0;
        while (j < len) {
            char ch = cur[j];
            int cnt = 0;
            while (j < len && cur[j] == ch) {
                j++;
                cnt++;
            }
            // 写入计数和字符
            if (cnt >= 10)
                next[pos++] = '0' + cnt / 10;
            next[pos++] = '0' + cnt % 10;
            next[pos++] = ch;
        }
        next[pos] = '\0';
        free(cur);
        cur = next;
    }

    return cur;
}
