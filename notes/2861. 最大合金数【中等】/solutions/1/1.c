int maxNumberOfAlloys(int n, int k, int budget, int** composition, int compositionSize,
    int* compositionColSize, int* stock, int stockSize, int* cost, int costSize) {
    int ans = 0;
    for (int m = 0; m < k; m++) {
        int lo = 0, hi = 200000000;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            long long totalCost = 0;
            int ok = 1;
            for (int j = 0; j < n; j++) {
                long long need = (long long)mid * composition[m][j] - stock[j];
                if (need < 0) need = 0;
                totalCost += need * cost[j];
                if (totalCost > budget) { ok = 0; break; }
            }
            if (ok) { if (mid > ans) ans = mid; lo = mid + 1; }
            else hi = mid - 1;
        }
    }
    return ans;
}
