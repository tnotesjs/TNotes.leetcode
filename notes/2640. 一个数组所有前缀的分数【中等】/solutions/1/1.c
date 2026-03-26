/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
long long* findPrefixScore(int* nums, int numsSize, int* returnSize) {
    long long* ans = (long long*)malloc(numsSize * sizeof(long long));
    *returnSize = numsSize;
    long long maxVal = 0, score = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > maxVal) maxVal = nums[i];
        score += nums[i] + maxVal;
        ans[i] = score;
    }
    return ans;
}
