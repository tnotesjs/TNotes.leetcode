bool isGood(int num) {
    bool diff = false;
    while (num > 0) {
        int d = num % 10;
        if (d == 3 || d == 4 || d == 7) return false;
        if (d == 2 || d == 5 || d == 6 || d == 9) diff = true;
        num /= 10;
    }
    return diff;
}

int rotatedDigits(int n) {
    int res = 0;
    for (int i = 1; i <= n; i++) {
        if (isGood(i)) res++;
    }
    return res;
}
