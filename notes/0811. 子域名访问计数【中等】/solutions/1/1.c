typedef struct Entry { char domain[256]; int count; struct Entry* next; } Entry;
#define HASH_SIZE 1009

unsigned hashStr(char* s) {
    unsigned h = 0;
    while (*s) h = h * 31 + *s++;
    return h % HASH_SIZE;
}

void addCount(Entry** table, char* domain, int count) {
    unsigned h = hashStr(domain);
    for (Entry* e = table[h]; e; e = e->next) {
        if (strcmp(e->domain, domain) == 0) { e->count += count; return; }
    }
    Entry* e = (Entry*)malloc(sizeof(Entry));
    strcpy(e->domain, domain);
    e->count = count;
    e->next = table[h];
    table[h] = e;
}

char** subdomainVisits(char** cpdomains, int cpdomainsSize, int* returnSize) {
    Entry* table[HASH_SIZE];
    memset(table, 0, sizeof(table));
    for (int i = 0; i < cpdomainsSize; i++) {
        int cnt; char domain[256];
        sscanf(cpdomains[i], "%d %s", &cnt, domain);
        int n = strlen(domain);
        for (int j = 0; j < n; j++) {
            if (j == 0 || domain[j - 1] == '.') addCount(table, domain + j, cnt);
        }
    }
    char** res = (char**)malloc(sizeof(char*) * 10000);
    *returnSize = 0;
    for (int i = 0; i < HASH_SIZE; i++) {
        for (Entry* e = table[i]; e; e = e->next) {
            res[*returnSize] = (char*)malloc(300);
            sprintf(res[*returnSize], "%d %s", e->count, e->domain);
            (*returnSize)++;
        }
    }
    return res;
}
