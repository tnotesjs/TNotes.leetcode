int maxSatisfied(int* customers, int customersSize, int* grumpy, int grumpySize, int minutes) {
    int n = customersSize;
    int base = 0;
    for (int i = 0; i < n; i++) {
        if (grumpy[i] == 0) base += customers[i];
    }
    int extra = 0;
    for (int i = 0; i < minutes; i++) {
        if (grumpy[i] == 1) extra += customers[i];
    }
    int maxExtra = extra;
    for (int i = minutes; i < n; i++) {
        if (grumpy[i] == 1) extra += customers[i];
        if (grumpy[i - minutes] == 1) extra -= customers[i - minutes];
        if (extra > maxExtra) maxExtra = extra;
    }
    return base + maxExtra;
}
