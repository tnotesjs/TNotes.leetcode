#define MAX_SIZE 20001
typedef struct Entry { int key; int val; struct Entry* next; } Entry;

int subarraySum(int* nums, int numsSize, int k) {
    Entry* table[MAX_SIZE];
    memset(table, 0, sizeof(table));
    int count = 0, prefixSum = 0;

    // insert (0, 1)
    int h0 = ((0 % MAX_SIZE) + MAX_SIZE) % MAX_SIZE;
    Entry* e0 = (Entry*)malloc(sizeof(Entry));
    e0->key = 0; e0->val = 1; e0->next = table[h0];
    table[h0] = e0;

    for (int i = 0; i < numsSize; i++) {
        prefixSum += nums[i];
        int target = prefixSum - k;
        int h = ((target % MAX_SIZE) + MAX_SIZE) % MAX_SIZE;
        for (Entry* e = table[h]; e; e = e->next) {
            if (e->key == target) { count += e->val; break; }
        }
        h = ((prefixSum % MAX_SIZE) + MAX_SIZE) % MAX_SIZE;
        Entry* found = NULL;
        for (Entry* e = table[h]; e; e = e->next) {
            if (e->key == prefixSum) { found = e; break; }
        }
        if (found) found->val++;
        else {
            Entry* ne = (Entry*)malloc(sizeof(Entry));
            ne->key = prefixSum; ne->val = 1; ne->next = table[h];
            table[h] = ne;
        }
    }
    return count;
}
