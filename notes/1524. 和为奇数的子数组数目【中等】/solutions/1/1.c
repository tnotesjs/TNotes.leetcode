int numOfSubarrays(int* arr, int arrSize) {
    long long MOD = 1000000007;
    long long res = 0;
    int odd = 0, even = 1, prefixSum = 0;
    for (int i = 0; i < arrSize; i++) {
        prefixSum += arr[i];
        if (prefixSum % 2 == 1) {
            res = (res + even) % MOD;
            odd++;
        } else {
            res = (res + odd) % MOD;
            even++;
        }
    }
    return (int)res;
}
