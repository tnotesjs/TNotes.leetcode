#define MOD 100003

typedef struct Entry { char* key; int val; struct Entry* next; } Entry;

typedef struct { Entry* buckets[MOD]; } HashMap;

unsigned hash(const char* s) {
    unsigned h = 0;
    while (*s) h = h * 31 + *s++;
    return h % MOD;
}

void put(HashMap* m, const char* key, int val) {
    unsigned h = hash(key);
    Entry* e = m->buckets[h];
    while (e) { if (strcmp(e->key, key) == 0) { e->val = val; return; } e = e->next; }
    e = malloc(sizeof(Entry));
    e->key = strdup(key);
    e->val = val;
    e->next = m->buckets[h];
    m->buckets[h] = e;
}

int get(HashMap* m, const char* key) {
    unsigned h = hash(key);
    Entry* e = m->buckets[h];
    while (e) { if (strcmp(e->key, key) == 0) return e->val; e = e->next; }
    return 0;
}

int cmp(const void* a, const void* b) {
    return (int)strlen(*(char**)a) - (int)strlen(*(char**)b);
}

int longestStrChain(char** words, int wordsSize) {
    qsort(words, wordsSize, sizeof(char*), cmp);
    HashMap m = {0};
    int res = 1;
    for (int w = 0; w < wordsSize; w++) {
        int len = strlen(words[w]);
        int best = 1;
        char buf[17];
        for (int i = 0; i < len; i++) {
            memcpy(buf, words[w], i);
            memcpy(buf + i, words[w] + i + 1, len - i - 1);
            buf[len - 1] = '\0';
            int prev = get(&m, buf);
            if (prev + 1 > best) best = prev + 1;
        }
        put(&m, words[w], best);
        if (best > res) res = best;
    }
    return res;
}
