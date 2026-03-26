int cmp2165asc(const void* a, const void* b) { return *(int*)a - *(int*)b; }
int cmp2165desc(const void* a, const void* b) { return *(int*)b - *(int*)a; }

long long smallestNumber(long long num) {
    if (num == 0) return 0;
    int neg = num < 0;
    long long val = neg ? -num : num;
    int digits[20], len = 0;
    while (val > 0) { digits[len++] = val % 10; val /= 10; }
    if (neg) {
        qsort(digits, len, sizeof(int), cmp2165desc);
        long long res = 0;
        for (int i = 0; i < len; i++) res = res * 10 + digits[i];
        return -res;
    } else {
        qsort(digits, len, sizeof(int), cmp2165asc);
        // 找第一个非零放首位
        for (int i = 0; i < len; i++) {
            if (digits[i] != 0) {
                int tmp = digits[i]; digits[i] = digits[0]; digits[0] = tmp;
                break;
            }
        }
        long long res = 0;
        for (int i = 0; i < len; i++) res = res * 10 + digits[i];
        return res;
    }
}
