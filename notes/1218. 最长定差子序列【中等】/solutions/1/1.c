typedef struct { int key; int val; } Entry;

int longestSubsequence(int* arr, int arrSize, int difference) {
    // Use offset hash table: values range [-10^4, 10^4]
    int offset = 40001;
    int* dp = (int*)calloc(80003, sizeof(int));
    int ans = 1;
    for (int i = 0; i < arrSize; i++) {
        int prev = dp[arr[i] - difference + offset] + 1;
        dp[arr[i] + offset] = prev;
        if (prev > ans) ans = prev;
    }
    free(dp);
    return ans;
}
