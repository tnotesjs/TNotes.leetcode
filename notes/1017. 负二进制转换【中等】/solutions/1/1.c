char* baseNeg2(int n) {
    if (n == 0) {
        char* res = malloc(2);
        res[0] = '0'; res[1] = '\0';
        return res;
    }
    char buf[64];
    int len = 0;
    while (n != 0) {
        int remainder = n & 1;
        buf[len++] = '0' + remainder;
        n = (n - remainder) / -2;
    }
    char* res = malloc(len + 1);
    for (int i = 0; i < len; i++) res[i] = buf[len - 1 - i];
    res[len] = '\0';
    return res;
}
