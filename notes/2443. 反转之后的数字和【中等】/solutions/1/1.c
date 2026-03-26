int reverse2443(int x) {
    int r = 0;
    while (x) {
        r = r * 10 + x % 10;
        x /= 10;
    }
    return r;
}

bool sumOfNumberAndReverse(int num) {
    for (int i = 0; i <= num; i++) {
        if (i + reverse2443(i) == num) return true;
    }
    return false;
}
