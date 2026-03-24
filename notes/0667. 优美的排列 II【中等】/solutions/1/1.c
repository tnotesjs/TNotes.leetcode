int* constructArray(int n, int k, int* returnSize) {
    int* res = (int*)malloc(sizeof(int) * n);
    *returnSize = n;
    int lo = 1, hi = n;
    for (int i = 0; i < n; i++) {
        if (k > 1) {
            if (k % 2 == 1) res[i] = lo++;
            else res[i] = hi--;
            k--;
        } else {
            res[i] = lo++;
        }
    }
    return res;
}
