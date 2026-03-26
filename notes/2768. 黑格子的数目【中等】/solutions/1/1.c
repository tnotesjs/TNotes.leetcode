long long *countBlackBlocks(int m, int n, int **coordinates, int coordinatesSize, int *coordinatesColSize, int *returnSize) {
    *returnSize = 5;
    long long *res = (long long *)calloc(5, sizeof(long long));
    // 用哈希表记录每个 2x2 块的黑格子数
    int cap = coordinatesSize * 4 * 2 + 1;
    typedef struct Entry { long long key; int val; int used; } Entry;
    Entry *table = (Entry *)calloc(cap, sizeof(Entry));

    void inc(long long key) {
        int h = (int)((key % cap + cap) % cap);
        while (table[h].used && table[h].key != key) h = (h + 1) % cap;
        table[h].key = key;
        table[h].val++;
        table[h].used = 1;
    }

    for (int i = 0; i < coordinatesSize; i++) {
        int x = coordinates[i][0], y = coordinates[i][1];
        for (int dx = 0; dx <= 1; dx++) {
            for (int dy = 0; dy <= 1; dy++) {
                int r = x - dx, c = y - dy;
                if (r >= 0 && r < m - 1 && c >= 0 && c < n - 1) {
                    inc((long long)r * n + c);
                }
            }
        }
    }
    for (int i = 0; i < cap; i++) {
        if (table[i].used) res[table[i].val]++;
    }
    res[0] = (long long)(m - 1) * (n - 1) - res[1] - res[2] - res[3] - res[4];
    free(table);
    return res;
}
