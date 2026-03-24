char* frequencySort(char* s) {
    int freq[128] = {0};
    int len = strlen(s);
    for (int i = 0; i < len; i++) freq[(unsigned char)s[i]]++;
    // 桶排序
    char* res = (char*)malloc(len + 1);
    int idx = 0;
    for (int f = len; f > 0; f--) {
        for (int c = 0; c < 128; c++) {
            if (freq[c] == f) {
                for (int k = 0; k < f; k++) res[idx++] = (char)c;
            }
        }
    }
    res[idx] = '\0';
    return res;
}
