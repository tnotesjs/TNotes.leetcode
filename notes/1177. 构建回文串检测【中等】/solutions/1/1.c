bool* canMakePaliQueries(char* s, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int n = strlen(s);
    int* prefix = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] ^ (1 << (s[i] - 'a'));
    }
    *returnSize = queriesSize;
    bool* res = (bool*)malloc(sizeof(bool) * queriesSize);
    for (int i = 0; i < queriesSize; i++) {
        int xor = prefix[queries[i][1] + 1] ^ prefix[queries[i][0]];
        int odd = __builtin_popcount(xor);
        res[i] = odd / 2 <= queries[i][2];
    }
    free(prefix);
    return res;
}
