int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int minimumAddedCoins(int* coins, int coinsSize, int target) {
    qsort(coins, coinsSize, sizeof(int), cmp);
    long long reach = 0;
    int add = 0, i = 0;
    while (reach < target) {
        if (i < coinsSize && coins[i] <= reach + 1) {
            reach += coins[i++];
        } else {
            reach += reach + 1;
            add++;
        }
    }
    return add;
}
