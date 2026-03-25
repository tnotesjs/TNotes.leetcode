#define OFFSET 500
#define RANGE 1001

int longestArithSeqLength(int* nums, int numsSize) {
    // dp[i][d+OFFSET] = length of arithmetic seq ending at i with diff d
    int** dp = malloc(numsSize * sizeof(int*));
    for (int i = 0; i < numsSize; i++) {
        dp[i] = calloc(RANGE, sizeof(int));
    }
    int res = 2;
    for (int i = 1; i < numsSize; i++) {
        for (int j = 0; j < i; j++) {
            int diff = nums[i] - nums[j] + OFFSET;
            int prev = dp[j][diff] > 0 ? dp[j][diff] : 1;
            dp[i][diff] = prev + 1;
            if (dp[i][diff] > res) res = dp[i][diff];
        }
    }
    for (int i = 0; i < numsSize; i++) free(dp[i]);
    free(dp);
    return res;
}
