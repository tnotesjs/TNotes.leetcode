#define HASH_SIZE 1009
typedef struct Entry { long long key; int val; struct Entry* next; } Entry;
typedef struct { Entry* buckets[HASH_SIZE]; } HashMap;

HashMap* createMap() {
    HashMap* m = (HashMap*)calloc(1, sizeof(HashMap));
    return m;
}

int getVal(HashMap* m, long long key) {
    int idx = (int)(((unsigned long long)key) % HASH_SIZE);
    for (Entry* e = m->buckets[idx]; e; e = e->next)
        if (e->key == key) return e->val;
    return 0;
}

void addVal(HashMap* m, long long key, int delta) {
    int idx = (int)(((unsigned long long)key) % HASH_SIZE);
    for (Entry* e = m->buckets[idx]; e; e = e->next)
        if (e->key == key) { e->val += delta; return; }
    Entry* e = (Entry*)malloc(sizeof(Entry));
    e->key = key; e->val = delta; e->next = m->buckets[idx]; m->buckets[idx] = e;
}

void freeMap(HashMap* m) {
    for (int i = 0; i < HASH_SIZE; i++) {
        Entry* e = m->buckets[i];
        while (e) { Entry* t = e; e = e->next; free(t); }
    }
    free(m);
}

int numberOfArithmeticSlices(int* nums, int numsSize) {
    int res = 0;
    HashMap** dp = (HashMap**)malloc(sizeof(HashMap*) * numsSize);
    for (int i = 0; i < numsSize; i++) dp[i] = createMap();
    for (int i = 1; i < numsSize; i++) {
        for (int j = 0; j < i; j++) {
            long long d = (long long)nums[i] - nums[j];
            int cnt = getVal(dp[j], d);
            res += cnt;
            addVal(dp[i], d, cnt + 1);
        }
    }
    for (int i = 0; i < numsSize; i++) freeMap(dp[i]);
    free(dp);
    return res;
}
