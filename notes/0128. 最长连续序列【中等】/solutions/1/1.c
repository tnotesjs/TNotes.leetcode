int longestConsecutive(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    // 排序后遍历（C 没有内置哈希集合，用排序代替）
    int cmp(const void* a, const void* b) {
        int x = *(int*)a, y = *(int*)b;
        return (x > y) - (x < y);
    }
    qsort(nums, numsSize, sizeof(int), cmp);
    int maxLen = 1, len = 1;
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] == nums[i - 1]) continue; // 跳过重复
        if (nums[i] == nums[i - 1] + 1) {
            len++;
        } else {
            len = 1;
        }
        if (len > maxLen) maxLen = len;
    }
    return maxLen;
}
