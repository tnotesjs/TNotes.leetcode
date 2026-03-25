int cmp1648(const void* a, const void* b) { return *(int*)b - *(int*)a; }

int maxProfit(int* inventory, int inventorySize, int orders) {
    long long MOD = 1000000007;
    qsort(inventory, inventorySize, sizeof(int), cmp1648);
    long long res = 0;
    int i = 0;
    while (orders > 0) {
        int cur = inventory[i];
        int next = (i + 1 < inventorySize) ? inventory[i + 1] : 0;
        long long width = i + 1;
        long long diff = cur - next;
        long long total = width * diff;
        if (orders <= total) {
            long long q = orders / width;
            long long r = orders % width;
            res = (res + (2LL * cur - q + 1) % MOD * q % MOD * 500000004 % MOD * width) % MOD;
            res = (res + (long long)(cur - q) % MOD * r) % MOD;
            orders = 0;
        } else {
            res = (res + (long long)(cur + next + 1) % MOD * diff % MOD * 500000004 % MOD * width) % MOD;
            orders -= (int)total;
            i++;
        }
    }
    return (int)((res % MOD + MOD) % MOD);
}
