/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

// 全局频率数组，用于 qsort 比较函数
int freq[201]; // -100 到 100，偏移 100

int cmp(const void* a, const void* b) {
    int x = *(int*)a;
    int y = *(int*)b;
    int fx = freq[x + 100];
    int fy = freq[y + 100];
    
    if (fx != fy) {
        return fx - fy; // 频率升序
    }
    return y - x; // 数值降序
}

int* frequencySort(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    
    // 初始化频率数组
    for (int i = 0; i < 201; i++) {
        freq[i] = 0;
    }
    
    // 统计频率
    for (int i = 0; i < numsSize; i++) {
        freq[nums[i] + 100]++;
    }
    
    // 排序
    qsort(nums, numsSize, sizeof(int), cmp);
    
    return nums;
}
