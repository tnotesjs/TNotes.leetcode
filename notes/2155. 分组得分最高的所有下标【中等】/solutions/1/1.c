/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* maxScoreIndices(int* nums, int numsSize, int* returnSize) {
    int totalOnes = 0;
    for (int i = 0; i < numsSize; i++) totalOnes += nums[i];
    int* res = (int*)malloc(sizeof(int) * (numsSize + 1));
    *returnSize = 0;
    int zeros = 0, ones = totalOnes;
    int maxScore = totalOnes;
    res[(*returnSize)++] = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 0) zeros++;
        else ones--;
        int score = zeros + ones;
        if (score > maxScore) {
            maxScore = score;
            *returnSize = 0;
            res[(*returnSize)++] = i + 1;
        } else if (score == maxScore) {
            res[(*returnSize)++] = i + 1;
        }
    }
    return res;
}
