typedef struct { int key; int val; UT_hash_handle hh; } HMap;

long long countGood(int* nums, int numsSize, int k) {
    HMap* map = NULL;
    long long pairs = 0, ans = 0;
    int left = 0;
    for (int right = 0; right < numsSize; right++) {
        HMap* entry = NULL;
        HASH_FIND_INT(map, &nums[right], entry);
        int c = entry ? entry->val : 0;
        pairs += c;
        if (entry) entry->val = c + 1;
        else { entry = (HMap*)malloc(sizeof(HMap)); entry->key = nums[right]; entry->val = 1; HASH_ADD_INT(map, key, entry); }
        while (pairs >= k) {
            ans += numsSize - right;
            HMap* le = NULL;
            HASH_FIND_INT(map, &nums[left], le);
            le->val--;
            pairs -= le->val;
            left++;
        }
    }
    HMap *cur, *tmp;
    HASH_ITER(hh, map, cur, tmp) { HASH_DEL(map, cur); free(cur); }
    return ans;
}
