#define HASH_SIZE 100003
typedef struct Entry { int key; int val; struct Entry* next; } Entry;
Entry* table[HASH_SIZE];

void addVal(int key, int delta) {
    int idx = ((unsigned int)key) % HASH_SIZE;
    for (Entry* e = table[idx]; e; e = e->next)
        if (e->key == key) { e->val += delta; return; }
    Entry* e = (Entry*)malloc(sizeof(Entry));
    e->key = key; e->val = delta; e->next = table[idx]; table[idx] = e;
}

int getVal(int key) {
    int idx = ((unsigned int)key) % HASH_SIZE;
    for (Entry* e = table[idx]; e; e = e->next)
        if (e->key == key) return e->val;
    return 0;
}

int fourSumCount(int* nums1, int nums1Size, int* nums2, int nums2Size,
                 int* nums3, int nums3Size, int* nums4, int nums4Size) {
    memset(table, 0, sizeof(table));
    for (int i = 0; i < nums1Size; i++)
        for (int j = 0; j < nums2Size; j++)
            addVal(nums1[i] + nums2[j], 1);
    int res = 0;
    for (int i = 0; i < nums3Size; i++)
        for (int j = 0; j < nums4Size; j++)
            res += getVal(-nums3[i] - nums4[j]);
    // free
    for (int i = 0; i < HASH_SIZE; i++) {
        Entry* e = table[i];
        while (e) { Entry* t = e; e = e->next; free(t); }
    }
    return res;
}
