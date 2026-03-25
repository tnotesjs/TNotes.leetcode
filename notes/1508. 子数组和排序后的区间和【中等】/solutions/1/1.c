int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int rangeSum(int* nums, int numsSize, int n, int left, int right) {
    long long MOD = 1000000007;
    int total = n * (n + 1) / 2;
    int* sums = (int*)malloc(total * sizeof(int));
    int idx = 0;
    for (int i = 0; i < n; i++) {
        int s = 0;
        for (int j = i; j < n; j++) {
            s += nums[j];
            sums[idx++] = s;
        }
    }
    qsort(sums, total, sizeof(int), cmpInt);
    long long res = 0;
    for (int i = left - 1; i < right; i++)
        res = (res + sums[i]) % MOD;
    free(sums);
    return (int)res;
}
