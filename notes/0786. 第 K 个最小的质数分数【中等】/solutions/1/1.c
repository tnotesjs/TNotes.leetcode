int* kthSmallestPrimeFraction(int* arr, int arrSize, int k, int* returnSize) {
    double lo = 0, hi = 1;
    int* res = (int*)malloc(sizeof(int) * 2);
    *returnSize = 2;
    while (lo < hi) {
        double mid = (lo + hi) / 2;
        int cnt = 0, p = 0, q = 1, j = 1;
        for (int i = 0; i < arrSize; i++) {
            while (j < arrSize && arr[i] > mid * arr[j]) j++;
            cnt += arrSize - j;
            if (j < arrSize && (long long)p * arr[j] < (long long)q * arr[i]) { p = arr[i]; q = arr[j]; }
        }
        if (cnt == k) { res[0] = p; res[1] = q; return res; }
        if (cnt < k) lo = mid; else hi = mid;
    }
    return res;
}
