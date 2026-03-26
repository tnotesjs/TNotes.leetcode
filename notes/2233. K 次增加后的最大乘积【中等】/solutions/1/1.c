#define MOD2233 1000000007LL

static void swap2233(int *a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }
static void down2233(int *a, int i, int n) {
    while (1) {
        int s = i, l = 2 * i + 1, r = l + 1;
        if (l < n && a[l] < a[s]) s = l;
        if (r < n && a[r] < a[s]) s = r;
        if (s == i) break;
        swap2233(a, i, s); i = s;
    }
}

int maximumProduct(int* nums, int numsSize, int k) {
    // 建小顶堆
    for (int i = numsSize / 2 - 1; i >= 0; i--) down2233(nums, i, numsSize);
    for (int i = 0; i < k; i++) {
        nums[0]++;
        down2233(nums, 0, numsSize);
    }
    long long res = 1;
    for (int i = 0; i < numsSize; i++) {
        res = res * nums[i] % MOD2233;
    }
    return (int)res;
}
