int minimizeXor(int num1, int num2) {
    int target = __builtin_popcount(num2);
    int res = 0;
    for (int i = 29; i >= 0 && target > 0; i--) {
        if (num1 & (1 << i)) {
            res |= (1 << i);
            target--;
        }
    }
    for (int i = 0; i <= 29 && target > 0; i++) {
        if (!(res & (1 << i))) {
            res |= (1 << i);
            target--;
        }
    }
    return res;
}
