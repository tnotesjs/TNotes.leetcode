#include <stdlib.h>
#include <string.h>

typedef struct { int key; int val; } Entry1711;

int countPairs(int* deliciousness, int deliciousnessSize) {
    long long MOD = 1000000007;
    int cap = 1 << 17;
    Entry1711* table = (Entry1711*)calloc(cap, sizeof(Entry1711));
    int* used = (int*)calloc(cap, sizeof(int));
    long long res = 0;
    for (int i = 0; i < deliciousnessSize; i++) {
        int d = deliciousness[i];
        for (int p = 1; p <= (1 << 21); p <<= 1) {
            int need = p - d;
            if (need < 0) continue;
            int h = need & (cap - 1);
            while (used[h] && table[h].key != need) h = (h + 1) & (cap - 1);
            if (used[h] && table[h].key == need) res = (res + table[h].val) % MOD;
        }
        int h = d & (cap - 1);
        while (used[h] && table[h].key != d) h = (h + 1) & (cap - 1);
        if (used[h]) table[h].val++;
        else { used[h] = 1; table[h].key = d; table[h].val = 1; }
    }
    free(table); free(used);
    return (int)res;
}
