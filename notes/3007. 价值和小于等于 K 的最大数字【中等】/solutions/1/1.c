long long accPrice(long long num, int x) {
    long long total = 0;
    for (int p = x; p <= 60; p += x) {
        long long cycle = 1LL << p;
        long long half = cycle >> 1;
        total += (num + 1) / cycle * half;
        long long rem = (num + 1) % cycle;
        if (rem > half) total += rem - half;
    }
    return total;
}

long long findMaximumNumber(long long k, int x) {
    long long lo = 1, hi = (k + 1LL) << x;
    while (lo < hi) {
        long long mid = lo + (hi - lo + 1) / 2;
        if (accPrice(mid, x) <= k) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}
