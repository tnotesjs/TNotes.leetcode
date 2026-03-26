/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getSubarrayBeauty(int* nums, int numsSize, int k, int x, int* returnSize) {
    *returnSize = numsSize - k + 1;
    int* ans = (int*)malloc(*returnSize * sizeof(int));
    int cnt[101] = {0}; // 偏移 50
    for (int i = 0; i < numsSize; i++) {
        cnt[nums[i] + 50]++;
        if (i >= k) cnt[nums[i - k] + 50]--;
        if (i >= k - 1) {
            int count = 0, beauty = 0;
            for (int j = 0; j < 101; j++) {
                count += cnt[j];
                if (count >= x) {
                    beauty = j - 50;
                    break;
                }
            }
            ans[i - k + 1] = beauty < 0 ? beauty : 0;
        }
    }
    return ans;
}
