#include <stdlib.h>

typedef struct { long long key; int val; } Entry;
typedef struct { Entry* data; int cap; } HashMap;

HashMap* createMap(int cap) {
    HashMap* m = (HashMap*)malloc(sizeof(HashMap));
    m->cap = cap;
    m->data = (Entry*)calloc(cap, sizeof(Entry));
    for (int i = 0; i < cap; i++) m->data[i].key = -1;
    return m;
}

int hashIdx(HashMap* m, long long key) {
    unsigned long long h = (unsigned long long)key * 2654435761ULL;
    return (int)(h % (unsigned long long)m->cap);
}

int getVal(HashMap* m, long long key) {
    int idx = hashIdx(m, key);
    while (m->data[idx].key != -1) {
        if (m->data[idx].key == key) return m->data[idx].val;
        idx = (idx + 1) % m->cap;
    }
    return 0;
}

void putVal(HashMap* m, long long key, int val) {
    int idx = hashIdx(m, key);
    while (m->data[idx].key != -1 && m->data[idx].key != key) {
        idx = (idx + 1) % m->cap;
    }
    m->data[idx].key = key;
    m->data[idx].val = val;
}

int maximumLength(int* nums, int numsSize) {
    HashMap* cnt = createMap(numsSize * 4);
    for (int i = 0; i < numsSize; i++) {
        putVal(cnt, nums[i], getVal(cnt, nums[i]) + 1);
    }
    int ans = 1;
    int ones = getVal(cnt, 1);
    if (ones > 0) {
        ans = ones % 2 == 1 ? ones : ones - 1;
    }
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 1) continue;
        long long cur = nums[i];
        int len = 0;
        while (cur <= 1000000000LL && getVal(cnt, cur) >= 2) {
            len += 2;
            cur = cur * cur;
        }
        if (cur <= 1000000000LL && getVal(cnt, cur) >= 1) len += 1;
        else len -= 1;
        if (len > ans) ans = len;
    }
    free(cnt->data);
    free(cnt);
    return ans;
}
