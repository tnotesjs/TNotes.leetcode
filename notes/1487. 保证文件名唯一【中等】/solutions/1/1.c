#define HASH_SIZE 100003
typedef struct Entry { char* key; int val; struct Entry* next; } Entry;

static unsigned hashStr(const char* s) {
    unsigned h = 0;
    while (*s) h = h * 31 + *s++;
    return h % HASH_SIZE;
}

static Entry* table[HASH_SIZE];

static int getVal(const char* key) {
    unsigned h = hashStr(key);
    for (Entry* e = table[h]; e; e = e->next)
        if (strcmp(e->key, key) == 0) return e->val;
    return -1;
}

static void setVal(const char* key, int val) {
    unsigned h = hashStr(key);
    for (Entry* e = table[h]; e; e = e->next)
        if (strcmp(e->key, key) == 0) { e->val = val; return; }
    Entry* e = (Entry*)malloc(sizeof(Entry));
    e->key = strdup(key);
    e->val = val;
    e->next = table[h];
    table[h] = e;
}

char** getFolderNames(char** names, int namesSize, int* returnSize) {
    memset(table, 0, sizeof(table));
    char** res = (char**)malloc(namesSize * sizeof(char*));
    char buf[50];
    for (int i = 0; i < namesSize; i++) {
        int v = getVal(names[i]);
        if (v == -1) {
            res[i] = strdup(names[i]);
            setVal(names[i], 1);
        } else {
            int k = v;
            sprintf(buf, "%s(%d)", names[i], k);
            while (getVal(buf) != -1) { k++; sprintf(buf, "%s(%d)", names[i], k); }
            res[i] = strdup(buf);
            setVal(names[i], k + 1);
            setVal(buf, 1);
        }
    }
    *returnSize = namesSize;
    return res;
}
