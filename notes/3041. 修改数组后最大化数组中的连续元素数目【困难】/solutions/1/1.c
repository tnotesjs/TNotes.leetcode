#include <stdlib.h>

typedef struct { int key; int val; } Entry2;

int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxSelectedElements(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int cap = numsSize * 8;
    Entry2* map = (Entry2*)calloc(cap, sizeof(Entry2));
    int* used = (int*)calloc(cap, sizeof(int));

    int getV(int key) {
        unsigned h = (unsigned)(key + 1000000001) * 2654435761U;
        int idx = h % cap;
        while (used[idx] && map[idx].key != key) idx = (idx + 1) % cap;
        return used[idx] ? map[idx].val : 0;
    }
    void setV(int key, int val) {
        unsigned h = (unsigned)(key + 1000000001) * 2654435761U;
        int idx = h % cap;
        while (used[idx] && map[idx].key != key) idx = (idx + 1) % cap;
        map[idx].key = key;
        map[idx].val = val;
        used[idx] = 1;
    }

    int ans = 0;
    for (int i = 0; i < numsSize; i++) {
        int x = nums[i];
        int v1 = getV(x) + 1;
        setV(x + 1, v1);
        int v0 = getV(x - 1) + 1;
        int cur = getV(x);
        if (v0 > cur) setV(x, v0); else v0 = cur;
        if (v1 > ans) ans = v1;
        if (v0 > ans) ans = v0;
    }
    free(map); free(used);
    return ans;
}
