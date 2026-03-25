char* longestDiverseString(int a, int b, int c) {
    char* res = (char*)malloc(301);
    int len = 0;
    int counts[3] = {a, b, c};
    char chars[3] = {'a', 'b', 'c'};
    while (1) {
        // 按剩余数量降序排序
        for (int i = 0; i < 2; i++)
            for (int j = i + 1; j < 3; j++)
                if (counts[j] > counts[i]) {
                    int t = counts[i]; counts[i] = counts[j]; counts[j] = t;
                    char tc = chars[i]; chars[i] = chars[j]; chars[j] = tc;
                }
        int placed = 0;
        for (int i = 0; i < 3; i++) {
            if (counts[i] == 0) continue;
            if (len >= 2 && res[len-1] == chars[i] && res[len-2] == chars[i]) continue;
            res[len++] = chars[i];
            counts[i]--;
            placed = 1;
            break;
        }
        if (!placed) break;
    }
    res[len] = '\0';
    return res;
}
