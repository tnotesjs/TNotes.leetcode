int cmpInt(const void* a, const void* b) {
    return *(int*)a > *(int*)b ? 1 : *(int*)a < *(int*)b ? -1 : 0;
}

int cmpLL(const void* a, const void* b) {
    long long x = *(long long*)a, y = *(long long*)b;
    return x > y ? 1 : x < y ? -1 : 0;
}

long long makePal(long long half, int odd) {
    long long pal = half;
    if (odd) half /= 10;
    while (half > 0) {
        pal = pal * 10 + half % 10;
        half /= 10;
    }
    return pal;
}

long long minimumCost(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmpInt);
    long long pals[200000];
    int palSize = 0;
    for (long long h = 1; h <= 100000; h++) {
        long long p = makePal(h, 1);
        if (p <= 1000000000LL) pals[palSize++] = p;
    }
    for (long long h = 1; h <= 100000; h++) {
        long long p = makePal(h, 0);
        if (p <= 1000000000LL) pals[palSize++] = p;
    }
    qsort(pals, palSize, sizeof(long long), cmpLL);
    long long median = nums[numsSize / 2];
    int lo = 0, hi = palSize - 1;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (pals[mid] < median) lo = mid + 1;
        else hi = mid;
    }
    long long ans = 1e18;
    for (int idx = (lo > 0 ? lo - 1 : 0); idx <= lo + 1 && idx < palSize; idx++) {
        long long cost = 0;
        for (int i = 0; i < numsSize; i++) {
            long long diff = (long long)nums[i] - pals[idx];
            cost += diff > 0 ? diff : -diff;
        }
        if (cost < ans) ans = cost;
    }
    return ans;
}
