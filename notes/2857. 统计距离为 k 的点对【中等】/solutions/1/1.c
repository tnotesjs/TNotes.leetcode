typedef struct CN { int x, y, cnt; struct CN* next; } CN;
#define CHSZ 100003

int countPairs(int** coordinates, int coordinatesSize, int* coordinatesColSize, int k) {
    CN* table[CHSZ]; memset(table, 0, sizeof(table));
    int ans = 0;
    for (int i = 0; i < coordinatesSize; i++) {
        int x = coordinates[i][0], y = coordinates[i][1];
        for (int a = 0; a <= k; a++) {
            int nx = x ^ a, ny = y ^ (k - a);
            unsigned h = ((unsigned)((long long)nx * 1000001 + ny)) % CHSZ;
            for (CN* p = table[h]; p; p = p->next)
                if (p->x == nx && p->y == ny) { ans += p->cnt; break; }
        }
        unsigned h = ((unsigned)((long long)x * 1000001 + y)) % CHSZ;
        CN* found = NULL;
        for (CN* p = table[h]; p; p = p->next)
            if (p->x == x && p->y == y) { found = p; break; }
        if (found) found->cnt++;
        else { CN* node = (CN*)malloc(sizeof(CN)); node->x=x; node->y=y; node->cnt=1; node->next=table[h]; table[h]=node; }
    }
    for (int i = 0; i < CHSZ; i++) { CN* p = table[i]; while (p) { CN* n = p->next; free(p); p = n; } }
    return ans;
}
