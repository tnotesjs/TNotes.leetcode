#define HASH_SIZE 20011

typedef struct {
    int key;
    int val;
    int used;
} Entry;

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    Entry table[HASH_SIZE];
    memset(table, 0, sizeof(table));

    int* res = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;

    for (int i = 0; i < numsSize; i++) {
        int anotherNum = target - nums[i];
        // 先查
        int h = ((anotherNum % HASH_SIZE) + HASH_SIZE) % HASH_SIZE;
        while (table[h].used && table[h].key != anotherNum)
            h = (h + 1) % HASH_SIZE;
        if (table[h].used) {
            res[0] = i;
            res[1] = table[h].val;
            return res;
        }
        // 后写
        int hw = ((nums[i] % HASH_SIZE) + HASH_SIZE) % HASH_SIZE;
        while (table[hw].used && table[hw].key != nums[i])
            hw = (hw + 1) % HASH_SIZE;
        table[hw].key = nums[i];
        table[hw].val = i;
        table[hw].used = 1;
    }
    return res;
}
