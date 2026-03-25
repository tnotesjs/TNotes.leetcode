bool isPrime(int n) {
    if (n < 2) return false;
    if (n < 4) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (long long i = 5; i * i <= n; i += 6)
        if (n % i == 0 || n % (i + 2) == 0) return false;
    return true;
}

int primePalindrome(int n) {
    if (n <= 2) return 2;
    if (n <= 3) return 3;
    if (n <= 5) return 5;
    if (n <= 7) return 7;
    if (n <= 11) return 11;
    for (int len = 3; len <= 9; len += 2) {
        int half = len / 2 + 1;
        int start = 1, end = 1;
        for (int i = 0; i < half - 1; i++) start *= 10;
        for (int i = 0; i < half; i++) end *= 10;
        for (int h = start; h < end; h++) {
            int digits[10], dLen = 0, tmp = h;
            while (tmp > 0) { digits[dLen++] = tmp % 10; tmp /= 10; }
            long long pal = h;
            for (int i = 1; i < dLen; i++) pal = pal * 10 + digits[i];
            if (pal >= n && isPrime((int)pal)) return (int)pal;
        }
    }
    return -1;
}
