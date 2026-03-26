long long f(long long x) {
    return x >= 0 ? (x + 2) * (x + 1) / 2 : 0;
}

long long distributeCandies(int n, int limit) {
    long long L = limit;
    return f(n) - 3 * f(n - L - 1) + 3 * f(n - 2 * (L + 1)) - f(n - 3 * (L + 1));
}
