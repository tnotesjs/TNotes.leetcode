int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxSumRangeQuery(int* nums, int numsSize, int** requests, int requestsSize,
                    int* requestsColSize) {
    long long MOD = 1000000007;
    int n = numsSize;
    int* diff = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < requestsSize; i++) {
        diff[requests[i][0]]++;
        diff[requests[i][1] + 1]--;
    }
    int* freq = (int*)malloc(n * sizeof(int));
    freq[0] = diff[0];
    for (int i = 1; i < n; i++) freq[i] = freq[i-1] + diff[i];
    qsort(freq, n, sizeof(int), cmpInt);
    qsort(nums, n, sizeof(int), cmpInt);
    long long res = 0;
    for (int i = 0; i < n; i++)
        res = (res + (long long)nums[i] * freq[i]) % MOD;
    free(diff); free(freq);
    return (int)res;
}
