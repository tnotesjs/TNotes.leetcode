int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }

int cmp(const void *a, const void *b) {
    return *(long long *)a - *(long long *)b > 0 ? 1 : -1;
}

long long makeSubKSumEqual(int *arr, int arrSize, int k) {
    int n = arrSize;
    int g = gcd(n, k);
    long long ans = 0;
    long long *group = malloc(n * sizeof(long long));
    for (int i = 0; i < g; i++) {
        int cnt = 0;
        for (int j = i; j < n; j += g) group[cnt++] = arr[j];
        qsort(group, cnt, sizeof(long long), cmp);
        long long mid = group[cnt / 2];
        for (int t = 0; t < cnt; t++) {
            ans += llabs(group[t] - mid);
        }
    }
    free(group);
    return ans;
}
