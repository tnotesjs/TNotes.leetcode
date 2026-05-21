char* getPermutation(int n, int k) {
    int numbers[9];
    int factorial[10];
    factorial[0] = 1;

    for (int i = 1; i <= n; i++) {
        numbers[i - 1] = i;
        factorial[i] = factorial[i - 1] * i;
    }

    int rank = k - 1;
    char* result = (char*)malloc(sizeof(char) * (n + 1));

    for (int remaining = n; remaining >= 1; remaining--) {
        int groupSize = factorial[remaining - 1];
        int index = rank / groupSize;

        result[n - remaining] = (char)(numbers[index] + '0');

        for (int i = index; i < remaining - 1; i++) {
            numbers[i] = numbers[i + 1];
        }

        rank %= groupSize;
    }

    result[n] = '\0';
    return result;
}
