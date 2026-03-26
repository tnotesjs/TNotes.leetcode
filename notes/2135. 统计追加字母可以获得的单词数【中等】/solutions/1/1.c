int wordCount(char** startWords, int startWordsSize, char** targetWords, int targetWordsSize) {
    // 用哈希表存储 startWords 的位掩码
    #define HSZ 100003
    int* table = (int*)calloc(HSZ, sizeof(int));
    int* keys = (int*)malloc(sizeof(int) * HSZ);
    for (int i = 0; i < startWordsSize; i++) {
        int mask = 0;
        for (int j = 0; startWords[i][j]; j++)
            mask |= 1 << (startWords[i][j] - 'a');
        int h = (unsigned)mask % HSZ;
        while (table[h] && keys[h] != mask) h = (h + 1) % HSZ;
        table[h] = 1;
        keys[h] = mask;
    }
    int res = 0;
    for (int i = 0; i < targetWordsSize; i++) {
        int mask = 0;
        int len = 0;
        for (int j = 0; targetWords[i][j]; j++) {
            mask |= 1 << (targetWords[i][j] - 'a');
            len++;
        }
        for (int j = 0; j < len; j++) {
            int bit = 1 << (targetWords[i][j] - 'a');
            int sub = mask ^ bit;
            int h = (unsigned)sub % HSZ;
            while (table[h] && keys[h] != sub) h = (h + 1) % HSZ;
            if (table[h]) { res++; break; }
        }
    }
    free(table);
    free(keys);
    return res;
}
