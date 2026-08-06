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
    int slow = n;
    int fast = getSumOfSquares(n);
    // 快指针一次走两步，慢指针一次走一步；相遇则有环
    while (fast != 1 && slow != fast) {
        slow = getSumOfSquares(slow);
        fast = getSumOfSquares(getSumOfSquares(fast));
    }
    return fast == 1;
}
