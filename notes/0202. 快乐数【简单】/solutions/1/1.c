int getSumOfSquares(int num) {
    int sum = 0;
    while (num > 0) {
        int digit = num % 10;
        sum += digit * digit;
        num /= 10;
    }
    return sum;
}

bool isHappy(int n) {
    // 任意 int 各位平方和很快落入 < 1000，用数组模拟哈希集合
    bool seen[1000] = {false};
    while (n != 1) {
        if (n < 1000) {
            if (seen[n]) return false;
            seen[n] = true;
        }
        n = getSumOfSquares(n);
    }
    return true;
}
