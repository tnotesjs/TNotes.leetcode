// 简化实现：使用偏移数组代替哈希表
bool isPossible(int* nums, int numsSize) {
    if (numsSize < 3) return false;
    int mn = nums[0], mx = nums[numsSize - 1];
    int range = mx - mn + 1;
    int* freq = (int*)calloc(range, sizeof(int));
    int* tail = (int*)calloc(range + 3, sizeof(int));
    for (int i = 0; i < numsSize; i++) freq[nums[i] - mn]++;
    for (int i = 0; i < numsSize; i++) {
        int n = nums[i] - mn;
        if (freq[n] == 0) continue;
        if (tail[n] > 0) {
            freq[n]--; tail[n]--; tail[n + 1]++;
        } else if (n + 2 < range && freq[n + 1] > 0 && freq[n + 2] > 0) {
            freq[n]--; freq[n + 1]--; freq[n + 2]--; tail[n + 3]++;
        } else {
            free(freq); free(tail); return false;
        }
    }
    free(freq); free(tail);
    return true;
}
