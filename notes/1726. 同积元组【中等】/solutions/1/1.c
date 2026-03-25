#include <stdlib.h>

typedef struct { int key; int val; } E1726;

int tupleSameProduct(int* nums, int numsSize) {
    int n = numsSize;
    int cap = 1;
    while (cap < n * n) cap <<= 1;
    E1726* table = (E1726*)calloc(cap, sizeof(E1726));
    int* used = (int*)calloc(cap, sizeof(int));
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int p = nums[i] * nums[j];
            int h = (unsigned)p & (cap - 1);
            while (used[h] && table[h].key != p) h = (h + 1) & (cap - 1);
            if (used[h]) table[h].val++;
            else { used[h] = 1; table[h].key = p; table[h].val = 1; }
        }
    }
    long long res = 0;
    for (int i = 0; i < cap; i++) {
        if (used[i]) {
            long long c = table[i].val;
            res += c * (c - 1) / 2 * 8;
        }
    }
    free(table); free(used);
    return (int)res;
}
