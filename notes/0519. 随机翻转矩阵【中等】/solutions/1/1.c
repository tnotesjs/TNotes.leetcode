#define HASH_SIZE 10007
typedef struct Entry { int key; int val; struct Entry* next; } Entry;

typedef struct {
    int m, n, total;
    Entry* table[HASH_SIZE];
} Solution;

int getOrDefault(Solution* obj, int key) {
    int idx = ((unsigned int)key) % HASH_SIZE;
    for (Entry* e = obj->table[idx]; e; e = e->next)
        if (e->key == key) return e->val;
    return key;
}

void putVal(Solution* obj, int key, int val) {
    int idx = ((unsigned int)key) % HASH_SIZE;
    for (Entry* e = obj->table[idx]; e; e = e->next)
        if (e->key == key) { e->val = val; return; }
    Entry* e = (Entry*)malloc(sizeof(Entry));
    e->key = key; e->val = val; e->next = obj->table[idx]; obj->table[idx] = e;
}

void clearTable(Solution* obj) {
    for (int i = 0; i < HASH_SIZE; i++) {
        Entry* e = obj->table[i];
        while (e) { Entry* t = e; e = e->next; free(t); }
        obj->table[i] = NULL;
    }
}

Solution* solutionCreate(int m, int n) {
    Solution* obj = (Solution*)calloc(1, sizeof(Solution));
    obj->m = m; obj->n = n; obj->total = m * n;
    return obj;
}

int* solutionFlip(Solution* obj, int* retSize) {
    *retSize = 2;
    int* res = (int*)malloc(sizeof(int) * 2);
    int r = rand() % obj->total;
    obj->total--;
    int val = getOrDefault(obj, r);
    putVal(obj, r, getOrDefault(obj, obj->total));
    res[0] = val / obj->n;
    res[1] = val % obj->n;
    return res;
}

void solutionReset(Solution* obj) {
    obj->total = obj->m * obj->n;
    clearTable(obj);
}

void solutionFree(Solution* obj) {
    clearTable(obj);
    free(obj);
}
