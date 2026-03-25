#include <stdlib.h>
#include <string.h>

#define MAP_SIZE 100003
typedef struct HNode { int key; int val; struct HNode* next; } HNode;

static HNode* htable[MAP_SIZE];

static void hmInit() { memset(htable, 0, sizeof(htable)); }
static unsigned hfunc(int key) { return ((unsigned)key * 2654435761u) % MAP_SIZE; }

static int hmGet(int key) {
    for (HNode* p = htable[hfunc(key)]; p; p = p->next)
        if (p->key == key) return p->val;
    return -1;
}

static void hmSet(int key, int val) {
    unsigned h = hfunc(key);
    for (HNode* p = htable[h]; p; p = p->next)
        if (p->key == key) { p->val = val; return; }
    HNode* p = (HNode*)malloc(sizeof(HNode));
    p->key = key; p->val = val; p->next = htable[h]; htable[h] = p;
}

int* avoidFlood(int* rains, int rainsSize, int* returnSize) {
    hmInit();
    int* res = (int*)malloc(rainsSize * sizeof(int));
    int* dry = (int*)malloc(rainsSize * sizeof(int));
    int drySize = 0;
    *returnSize = rainsSize;
    for (int i = 0; i < rainsSize; i++) {
        if (rains[i] == 0) {
            dry[drySize++] = i;
            res[i] = 1;
        } else {
            res[i] = -1;
            int lake = rains[i];
            int lastRain = hmGet(lake);
            if (lastRain != -1) {
                int lo = 0, hi = drySize;
                while (lo < hi) {
                    int mid = (lo + hi) / 2;
                    if (dry[mid] > lastRain) hi = mid;
                    else lo = mid + 1;
                }
                if (lo == drySize) {
                    *returnSize = 0;
                    free(dry); free(res);
                    return NULL;
                }
                res[dry[lo]] = lake;
                memmove(&dry[lo], &dry[lo+1], (drySize-lo-1)*sizeof(int));
                drySize--;
            }
            hmSet(lake, i);
        }
    }
    free(dry);
    return res;
}
