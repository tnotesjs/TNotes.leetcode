long long gcd(long long a, long long b) {
    while (b) { long long t = b; b = a % b; a = t; }
    return a;
}

int minimizeSet(int divisor1, int divisor2, int uniqueCnt1, int uniqueCnt2) {
    long long d1 = divisor1, d2 = divisor2;
    long long lcm = d1 / gcd(d1, d2) * d2;
    long long lo = 1, hi = 2000000000LL;
    while (lo < hi) {
        long long mid = (lo + hi) / 2;
        long long a = mid - mid / d1;
        long long b = mid - mid / d2;
        long long c = mid - mid / d1 - mid / d2 + mid / lcm;
        if (a >= uniqueCnt1 && b >= uniqueCnt2 && c >= (long long)uniqueCnt1 + uniqueCnt2)
            hi = mid;
        else
            lo = mid + 1;
    }
    return (int)lo;
}
