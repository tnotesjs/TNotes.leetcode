int destroyTargets(int* nums, int numsSize, int space) {
    // 用哈希表统计每个余数的出现次数
    // 简单做法：先排序找余数计数
    int *count = (int *)calloc(space, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        count[nums[i] % space]++;
    }
    int maxCount = 0, ans = 2147483647;
    for (int i = 0; i < numsSize; i++) {
        int cnt = count[nums[i] % space];
        if (cnt > maxCount || (cnt == maxCount && nums[i] < ans)) {
            maxCount = cnt;
            ans = nums[i];
        }
    }
    free(count);
    return ans;
}
