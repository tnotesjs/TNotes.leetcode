int totalMoney(int n) {
    int weeks = n / 7;
    int rem = n % 7;
    int fullWeeksSum = 7 * weeks * (weeks + 7) / 2;
    int remSum = rem * (2 * weeks + rem + 1) / 2;
    return fullWeeksSum + remSum;
}
