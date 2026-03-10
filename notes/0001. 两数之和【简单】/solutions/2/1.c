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

    // 第一步：构建哈希表
    for (int i = 0; i < numsSize; i++) {
        int h = ((nums[i] % HASH_SIZE) + HASH_SIZE) % HASH_SIZE;
        while (table[h].used && table[h].key != nums[i])
            h = (h + 1) % HASH_SIZE;
        table[h].key = nums[i];
        table[h].val = i;
        table[h].used = 1;
    }

    // 第二步：查询哈希表
    int* res = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    for (int i = 0; i < numsSize; i++) {
        int anotherNum = target - nums[i];
        int h = ((anotherNum % HASH_SIZE) + HASH_SIZE) % HASH_SIZE;
        while (table[h].used && table[h].key != anotherNum)
            h = (h + 1) % HASH_SIZE;
        if (table[h].used && table[h].val != i) {
            res[0] = i;
            res[1] = table[h].val;
            return res;
        }
    }
    return res;
}
