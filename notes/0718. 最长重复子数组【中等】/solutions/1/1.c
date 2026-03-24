int findLength(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int** dp = (int**)malloc(sizeof(int*) * (nums1Size + 1));
    for (int i = 0; i <= nums1Size; i++) dp[i] = (int*)calloc(nums2Size + 1, sizeof(int));
    int res = 0;
    for (int i = 1; i <= nums1Size; i++) {
        for (int j = 1; j <= nums2Size; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > res) res = dp[i][j];
            }
        }
    }
    for (int i = 0; i <= nums1Size; i++) free(dp[i]);
    free(dp);
    return res;
}
