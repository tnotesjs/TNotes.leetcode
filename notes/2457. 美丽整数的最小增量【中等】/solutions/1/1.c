int digitSum(long long x) {
    int s = 0;
    while (x) { s += x % 10; x /= 10; }
    return s;
}

long long makeIntegerBeautiful(long long n, int target) {
    long long add = 0, base = 1;
    while (digitSum(n) > target) {
        long long remainder = n % (base * 10);
        long long carry = base * 10 - remainder;
        n += carry;
        add += carry;
        base *= 10;
    }
    return add;
}
