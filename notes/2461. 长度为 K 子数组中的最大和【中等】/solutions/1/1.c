// 简易哈希表
typedef struct Entry2461 {
    int key, val;
    struct Entry2461 *next;
} Entry2461;

typedef struct {
    Entry2461 **buckets;
    int size, distinct;
} HMap2461;

HMap2461* createMap2461(int size) {
    HMap2461 *m = (HMap2461 *)malloc(sizeof(HMap2461));
    m->size = size;
    m->distinct = 0;
    m->buckets = (Entry2461 **)calloc(size, sizeof(Entry2461 *));
    return m;
}

void mapAdd2461(HMap2461 *m, int key, int delta) {
    int idx = ((unsigned)key) % m->size;
    Entry2461 *e = m->buckets[idx];
    while (e) {
        if (e->key == key) {
            e->val += delta;
            if (e->val == 0) m->distinct--;
            else if (e->val == delta) m->distinct++;
            return;
        }
        e = e->next;
    }
    Entry2461 *ne = (Entry2461 *)malloc(sizeof(Entry2461));
    ne->key = key; ne->val = delta; ne->next = m->buckets[idx];
    m->buckets[idx] = ne;
    if (delta != 0) m->distinct++;
}

void freeMap2461(HMap2461 *m) {
    for (int i = 0; i < m->size; i++) {
        Entry2461 *e = m->buckets[i];
        while (e) { Entry2461 *t = e; e = e->next; free(t); }
    }
    free(m->buckets);
    free(m);
}

long long maximumSubarraySum(int* nums, int numsSize, int k) {
    HMap2461 *freq = createMap2461(100003);
    long long sum = 0, ans = 0;
    for (int i = 0; i < numsSize; i++) {
        mapAdd2461(freq, nums[i], 1);
        sum += nums[i];
        if (i >= k) {
            mapAdd2461(freq, nums[i - k], -1);
            sum -= nums[i - k];
        }
        if (i >= k - 1 && freq->distinct == k) {
            if (sum > ans) ans = sum;
        }
    }
    freeMap2461(freq);
    return ans;
}
