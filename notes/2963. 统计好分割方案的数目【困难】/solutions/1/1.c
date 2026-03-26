typedef struct {
    int key;
    int val;
    UT_hash_handle hh;
} HashMap;

int numberOfGoodPartitions(int* nums, int numsSize) {
    long long MOD = 1e9 + 7;
    HashMap* map = NULL;
    for (int i = 0; i < numsSize; i++) {
        HashMap* entry;
        HASH_FIND_INT(map, &nums[i], entry);
        if (entry) {
            entry->val = i;
        } else {
            entry = malloc(sizeof(HashMap));
            entry->key = nums[i];
            entry->val = i;
            HASH_ADD_INT(map, key, entry);
        }
    }
    int segments = 0, maxRight = 0;
    for (int i = 0; i < numsSize; i++) {
        if (i > maxRight) segments++;
        HashMap* entry;
        HASH_FIND_INT(map, &nums[i], entry);
        if (entry->val > maxRight) maxRight = entry->val;
    }
    long long ans = 1;
    for (int i = 0; i < segments - 1; i++)
        ans = ans * 2 % MOD;
    HashMap *cur, *tmp;
    HASH_ITER(hh, map, cur, tmp) {
        HASH_DEL(map, cur);
        free(cur);
    }
    return (int)ans;
}
