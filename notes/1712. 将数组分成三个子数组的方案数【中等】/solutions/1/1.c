#include <stdlib.h>

int waysToSplit(int* nums, int numsSize) {
    long long MOD = 1000000007;
    int n = numsSize;
    long long* pre = (long long*)calloc(n + 1, sizeof(long long));
    for (int i = 0; i < n; i++) pre[i+1] = pre[i] + nums[i];
    long long res = 0;
    for (int i = 1; i < n - 1; i++) {
        long long leftSum = pre[i];
        if (leftSum * 3 > pre[n]) break;
        int lo = i + 1, hi = n - 1;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (pre[mid] - pre[i] < leftSum) lo = mid + 1;
            else hi = mid;
        }
        int jMin = lo;
        lo = jMin; hi = n - 1;
        while (lo < hi) {
            int mid = (lo + hi + 1) / 2;
            if (pre[mid] - pre[i] <= pre[n] - pre[mid]) lo = mid;
            else hi = mid - 1;
        }
        int jMax = lo;
        if (jMax >= jMin) res = (res + jMax - jMin + 1) % MOD;
    }
    free(pre);
    return (int)res;
}
