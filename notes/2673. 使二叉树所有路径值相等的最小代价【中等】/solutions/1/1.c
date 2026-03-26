int minIncrements(int n, int* cost, int costSize) {
    int ans = 0;
    for (int j = n / 2 - 1; j >= 0; j--) {
        int l = 2 * j + 1, r = 2 * j + 2;
        int diff = cost[l] - cost[r];
        if (diff < 0) diff = -diff;
        ans += diff;
        cost[j] += cost[l] > cost[r] ? cost[l] : cost[r];
    }
    return ans;
}
