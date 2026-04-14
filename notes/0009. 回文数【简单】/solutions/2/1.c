bool isPalindrome(int x) {
    if (x < 0)
        return false;
    int originalNum = x;
    long long resultNum = 0;
    while (x != 0) {
        resultNum = resultNum * 10 + x % 10;
        x /= 10;
    }
    return originalNum == resultNum;
}
