#define HASH_SIZE 2003
typedef struct Entry { int key; int val; struct Entry* next; } Entry;
Entry* table[HASH_SIZE];

void clearTable() {
    for (int i = 0; i < HASH_SIZE; i++) {
        Entry* e = table[i];
        while (e) { Entry* t = e; e = e->next; free(t); }
        table[i] = NULL;
    }
}

void addOne(int key) {
    int idx = ((unsigned int)key) % HASH_SIZE;
    for (Entry* e = table[idx]; e; e = e->next)
        if (e->key == key) { e->val++; return; }
    Entry* e = (Entry*)malloc(sizeof(Entry));
    e->key = key; e->val = 1; e->next = table[idx]; table[idx] = e;
}

int numberOfBoomerangs(int** points, int pointsSize, int* pointsColSize) {
    int res = 0;
    for (int i = 0; i < pointsSize; i++) {
        memset(table, 0, sizeof(table));
        for (int j = 0; j < pointsSize; j++) {
            int dx = points[i][0] - points[j][0];
            int dy = points[i][1] - points[j][1];
            addOne(dx * dx + dy * dy);
        }
        for (int k = 0; k < HASH_SIZE; k++)
            for (Entry* e = table[k]; e; e = e->next)
                res += e->val * (e->val - 1);
        clearTable();
    }
    return res;
}
