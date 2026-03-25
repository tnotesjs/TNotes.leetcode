long long gcd_f(long long a, long long b) { return b == 0 ? a : gcd_f(b, a % b); }
long long lcm_f(long long a, long long b) { return a / gcd_f(a, b) * b; }

int nthUglyNumber(int n, int a, int b, int c) {
    long long ab = lcm_f(a, b);
    long long ac = lcm_f(a, c);
    long long bc = lcm_f(b, c);
    long long abc = lcm_f(ab, c);
    long long lo = 1, hi = 2000000000LL;
    while (lo < hi) {
        long long mid = (lo + hi) / 2;
        long long cnt = mid / a + mid / b + mid / c - mid / ab - mid / ac - mid / bc + mid / abc;
        if (cnt >= n) hi = mid;
        else lo = mid + 1;
    }
    return (int)lo;
}
