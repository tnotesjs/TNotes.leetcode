int longestSquareStreak(int* nums, int numsSize) {
    int visited[100001] = {0};
    for (int i = 0; i < numsSize; i++) visited[nums[i]] = 1;
    int ans = -1;
    for (int i = 0; i < numsSize; i++) {
        long long x = nums[i];
        int len = 0;
        while (x <= 100000 && visited[x]) {
            len++;
            x = x * x;
        }
        if (len >= 2 && len > ans) ans = len;
    }
    return ans;
}
