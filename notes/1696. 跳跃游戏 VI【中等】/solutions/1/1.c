#include <stdlib.h>

int maxResult(int* nums, int numsSize, int k) {
    int n = numsSize;
    int* dp = (int*)malloc(n * sizeof(int));
    int* deque = (int*)malloc(n * sizeof(int));
    int head = 0, tail = 0;
    dp[0] = nums[0];
    deque[tail++] = 0;
    for (int i = 1; i < n; i++) {
        while (head < tail && deque[head] < i - k) head++;
        dp[i] = dp[deque[head]] + nums[i];
        while (head < tail && dp[deque[tail-1]] <= dp[i]) tail--;
        deque[tail++] = i;
    }
    int res = dp[n-1];
    free(dp);
    free(deque);
    return res;
}
