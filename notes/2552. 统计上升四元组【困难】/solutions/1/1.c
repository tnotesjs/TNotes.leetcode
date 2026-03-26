long long countQuadruplets(int* nums, int numsSize) {
    int n = numsSize;
    long long ans = 0;
    long long* f = (long long*)calloc(n, sizeof(long long));
    for (int k = 1; k < n; k++) {
        int cntLess = 0;
        for (int j = 0; j < k; j++) {
            if (nums[j] < nums[k]) {
                ans += f[j];
                cntLess++;
            } else if (nums[j] > nums[k]) {
                f[j] += cntLess;
            }
        }
    }
    free(f);
    return ans;
}
