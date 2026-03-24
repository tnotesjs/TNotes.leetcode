/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#define HASH_SIZE 100003

typedef struct Entry {
    char seq[11];
    int count;
    struct Entry* next;
} Entry;

unsigned int hashStr(const char* s) {
    unsigned int h = 0;
    for (int i = 0; i < 10; i++)
        h = h * 31 + s[i];
    return h % HASH_SIZE;
}

char** findRepeatedDnaSequences(char* s, int* returnSize) {
    *returnSize = 0;
    int len = strlen(s);
    if (len < 10) return NULL;
    Entry** table = (Entry**)calloc(HASH_SIZE, sizeof(Entry*));
    char** res = (char**)malloc(sizeof(char*) * (len - 9));
    for (int i = 0; i <= len - 10; i++) {
        unsigned int h = hashStr(s + i);
        Entry* e = table[h];
        Entry* found = NULL;
        while (e) {
            if (strncmp(e->seq, s + i, 10) == 0) { found = e; break; }
            e = e->next;
        }
        if (found) {
            if (found->count == 1) {
                res[*returnSize] = (char*)malloc(11);
                strncpy(res[*returnSize], s + i, 10);
                res[*returnSize][10] = '\0';
                (*returnSize)++;
            }
            found->count++;
        } else {
            Entry* ne = (Entry*)malloc(sizeof(Entry));
            strncpy(ne->seq, s + i, 10);
            ne->seq[10] = '\0';
            ne->count = 1;
            ne->next = table[h];
            table[h] = ne;
        }
    }
    // 释放哈希表
    for (int i = 0; i < HASH_SIZE; i++) {
        Entry* e = table[i];
        while (e) { Entry* next = e->next; free(e); e = next; }
    }
    free(table);
    return res;
}
