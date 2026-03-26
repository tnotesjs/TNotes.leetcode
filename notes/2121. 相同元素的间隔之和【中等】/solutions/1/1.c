/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
long long* getDistances(int* arr, int arrSize, int* returnSize) {
    long long* res = (long long*)calloc(arrSize, sizeof(long long));
    *returnSize = arrSize;
    // 用哈希表分组，简化版：两次遍历
    // 左到右遍历：维护每个值的出现次数和索引和
    // 使用简单哈希表
    #define SZ 100003
    typedef struct { int key; long long sum; int cnt; int used; } Entry;
    Entry* table = (Entry*)calloc(SZ, sizeof(Entry));
    for (int i = 0; i < arrSize; i++) {
        int h = ((unsigned)arr[i]) % SZ;
        while (table[h].used && table[h].key != arr[i]) h = (h + 1) % SZ;
        table[h].used = 1;
        table[h].key = arr[i];
        res[i] += (long long)i * table[h].cnt - table[h].sum;
        table[h].sum += i;
        table[h].cnt++;
    }
    // 右到左遍历
    Entry* table2 = (Entry*)calloc(SZ, sizeof(Entry));
    for (int i = arrSize - 1; i >= 0; i--) {
        int h = ((unsigned)arr[i]) % SZ;
        while (table2[h].used && table2[h].key != arr[i]) h = (h + 1) % SZ;
        table2[h].used = 1;
        table2[h].key = arr[i];
        res[i] += table2[h].sum - (long long)i * table2[h].cnt;
        table2[h].sum += i;
        table2[h].cnt++;
    }
    free(table);
    free(table2);
    return res;
}
