int cmpDesc_2679(const void* a, const void* b) {
    return *(int*)b - *(int*)a;
}

int matrixSum(int** nums, int numsSize, int* numsColSize) {
    int m = numsSize, n = numsColSize[0];
    for (int i = 0; i < m; i++) qsort(nums[i], n, sizeof(int), cmpDesc_2679);
    int ans = 0;
    for (int j = 0; j < n; j++) {
        int mx = 0;
        for (int i = 0; i < m; i++) {
            if (nums[i][j] > mx) mx = nums[i][j];
        }
        ans += mx;
    }
    return ans;
}
