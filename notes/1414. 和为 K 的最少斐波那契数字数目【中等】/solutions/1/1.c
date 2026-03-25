int findMinFibonacciNumbers(int k) {
    int fibs[50], n = 0;
    fibs[n++] = 1; fibs[n++] = 1;
    while (fibs[n - 1] < k) {
        fibs[n] = fibs[n - 1] + fibs[n - 2];
        n++;
    }
    int count = 0;
    for (int i = n - 1; i >= 0 && k > 0; i--) {
        if (fibs[i] <= k) {
            k -= fibs[i];
            count++;
        }
    }
    return count;
}
