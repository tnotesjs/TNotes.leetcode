int countPrimes(int n) {
    if (n < 2) return 0;
    bool* isPrime = (bool*)malloc(sizeof(bool) * n);
    memset(isPrime, true, n);
    isPrime[0] = isPrime[1] = false;
    for (int i = 2; (long long)i * i < n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (isPrime[i]) count++;
    }
    free(isPrime);
    return count;
}
