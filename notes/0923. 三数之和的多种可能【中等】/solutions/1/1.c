int threeSumMulti(int* arr, int arrSize, int target) {
    long long MOD = 1000000007;
    long long count[101] = {0};
    for (int i = 0; i < arrSize; i++) count[arr[i]]++;

    long long res = 0;
    for (int i = 0; i <= 100; i++) {
        for (int j = i; j <= 100; j++) {
            int k = target - i - j;
            if (k < j || k > 100) continue;
            if (!count[i] || !count[j] || !count[k]) continue;

            if (i == j && j == k) {
                res += count[i] * (count[i] - 1) * (count[i] - 2) / 6;
            } else if (i == j) {
                res += count[i] * (count[i] - 1) / 2 * count[k];
            } else if (j == k) {
                res += count[i] * count[j] * (count[j] - 1) / 2;
            } else {
                res += count[i] * count[j] * count[k];
            }
            res %= MOD;
        }
    }

    return (int)res;
}
