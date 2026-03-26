int minimumSum(int n, int k) {
    int m = n < (k - 1) / 2 ? n : (k - 1) / 2;
    long long sum = (long long)m * (m + 1) / 2;
    int rem = n - m;
    sum += (long long)rem * k + (long long)rem * (rem - 1) / 2;
    return (int)sum;
}
