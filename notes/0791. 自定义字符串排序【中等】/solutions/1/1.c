int rank[26];

int cmp(const void* a, const void* b) {
    return rank[*(char*)a - 'a'] - rank[*(char*)b - 'a'];
}

char* customSortString(char* order, char* s) {
    for (int i = 0; i < 26; i++) rank[i] = 26;
    for (int i = 0; order[i]; i++) rank[order[i] - 'a'] = i;
    int n = strlen(s);
    char* res = (char*)malloc(n + 1);
    memcpy(res, s, n + 1);
    qsort(res, n, sizeof(char), cmp);
    return res;
}
