#define HASH_SIZE 100003

typedef struct Entry {
    int key, count;
    struct Entry* next;
} Entry;

int getCount(Entry** table, int key) {
    unsigned h = (unsigned)key % HASH_SIZE;
    for (Entry* cur = table[h]; cur; cur = cur->next)
        if (cur->key == key) return cur->count;
    return 0;
}

void setCount(Entry** table, int key, int count) {
    unsigned h = (unsigned)key % HASH_SIZE;
    for (Entry* cur = table[h]; cur; cur = cur->next) {
        if (cur->key == key) { cur->count = count; return; }
    }
    Entry* node = (Entry*)malloc(sizeof(Entry));
    node->key = key; node->count = count;
    node->next = table[h]; table[h] = node;
}

int maxSubarrayLength(int* nums, int numsSize, int k) {
    Entry** table = (Entry**)calloc(HASH_SIZE, sizeof(Entry*));
    int left = 0, maxLen = 0;
    for (int right = 0; right < numsSize; right++) {
        setCount(table, nums[right], getCount(table, nums[right]) + 1);
        while (getCount(table, nums[right]) > k) {
            setCount(table, nums[left], getCount(table, nums[left]) - 1);
            left++;
        }
        int len = right - left + 1;
        if (len > maxLen) maxLen = len;
    }
    for (int i = 0; i < HASH_SIZE; i++) {
        Entry* cur = table[i];
        while (cur) { Entry* next = cur->next; free(cur); cur = next; }
    }
    free(table);
    return maxLen;
}
