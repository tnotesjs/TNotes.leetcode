int countNumbersWithUniqueDigits(int n) {
    if (n == 0) return 1;
    int res = 10, product = 9;
    for (int i = 2; i <= n && i <= 10; i++) {
        product *= (10 - i + 1);
        res += product;
    }
    return res;
}
