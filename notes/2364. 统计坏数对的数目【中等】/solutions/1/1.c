typedef struct Entry2364 {
    long long key;
    long long count;
    struct Entry2364* next;
} Entry2364;

long long countBadPairs(int* nums, int numsSize) {
    long long n = numsSize;
    long long total = n * (n - 1) / 2;
    int size = 100003;
    Entry2364** table = (Entry2364**)calloc(size, sizeof(Entry2364*));
    long long good = 0;
    for (int i = 0; i < n; i++) {
        long long diff = (long long)nums[i] - i;
        int h = (int)((diff % size + size) % size);
        Entry2364* cur = table[h];
        while (cur && cur->key != diff) cur = cur->next;
        if (cur) {
            good += cur->count;
            cur->count++;
        } else {
            Entry2364* node = (Entry2364*)malloc(sizeof(Entry2364));
            node->key = diff;
            node->count = 1;
            node->next = table[h];
            table[h] = node;
        }
    }
    for (int i = 0; i < size; i++) {
        Entry2364* cur = table[i];
        while (cur) { Entry2364* tmp = cur; cur = cur->next; free(tmp); }
    }
    free(table);
    return total - good;
}
