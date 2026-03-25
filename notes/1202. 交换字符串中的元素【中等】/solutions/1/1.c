int parent_g[100001];
int find(int x) { return parent_g[x] == x ? x : (parent_g[x] = find(parent_g[x])); }

int cmpChar(const void* a, const void* b) { return *(char*)a - *(char*)b; }
int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

char* smallestStringWithSwaps(char* s, int** pairs, int pairsSize, int* pairsColSize) {
    int n = strlen(s);
    for (int i = 0; i < n; i++) parent_g[i] = i;
    for (int i = 0; i < pairsSize; i++) {
        int ra = find(pairs[i][0]), rb = find(pairs[i][1]);
        if (ra != rb) parent_g[ra] = rb;
    }
    // Group indices by root
    int* groupIdx[n];
    int groupSize[n];
    int groupCap[n];
    memset(groupSize, 0, sizeof(int) * n);
    memset(groupCap, 0, sizeof(int) * n);
    memset(groupIdx, 0, sizeof(int*) * n);
    for (int i = 0; i < n; i++) {
        int r = find(i);
        if (groupSize[r] == groupCap[r]) {
            groupCap[r] = groupCap[r] == 0 ? 4 : groupCap[r] * 2;
            groupIdx[r] = (int*)realloc(groupIdx[r], sizeof(int) * groupCap[r]);
        }
        groupIdx[r][groupSize[r]++] = i;
    }
    char* res = (char*)malloc(n + 1);
    strcpy(res, s);
    for (int r = 0; r < n; r++) {
        if (groupSize[r] <= 1) continue;
        int sz = groupSize[r];
        char* chars = (char*)malloc(sz);
        for (int i = 0; i < sz; i++) chars[i] = s[groupIdx[r][i]];
        qsort(chars, sz, sizeof(char), cmpChar);
        qsort(groupIdx[r], sz, sizeof(int), cmpInt);
        for (int i = 0; i < sz; i++) res[groupIdx[r][i]] = chars[i];
        free(chars);
    }
    for (int r = 0; r < n; r++) free(groupIdx[r]);
    return res;
}
