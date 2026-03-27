long long countUpTo(long long num, int limit, char* s) {
    if (num <= 0) return 0;
    char numStr[20];
    sprintf(numStr, "%lld", num);
    int d = strlen(numStr), sLen = strlen(s);
    if (d < sLen) return 0;
    long long total = 0;
    // 长度 < d
    for (int k = sLen; k < d; k++) {
        int p = k - sLen;
        if (p == 0) {
            total += 1;
        } else {
            long long ways = limit;
            for (int j = 1; j < p; j++) ways *= (limit + 1);
            total += ways;
        }
    }
    // 长度 = d
    int p = d - sLen;
    if (p == 0) {
        if (strcmp(s, numStr) <= 0) total += 1;
    } else {
        int tight = 1;
        for (int i = 0; i < p; i++) {
            int di = numStr[i] - '0';
            int lo = (i == 0) ? 1 : 0;
            int hi = di - 1 < limit ? di - 1 : limit;
            if (hi >= lo) {
                long long ways = hi - lo + 1;
                for (int j = 0; j < p - 1 - i; j++) ways *= (limit + 1);
                total += ways;
            }
            if (di > limit) { tight = 0; break; }
        }
        if (tight) {
            if (strcmp(s, numStr + p) <= 0) total += 1;
        }
    }
    return total;
}

long long numberOfPowerfulInt(long long start, long long finish, int limit, char* s) {
    return countUpTo(finish, limit, s) - countUpTo(start - 1, limit, s);
}
