int cmp2191Asc(const void *a, const void *b) {
    return *(char *)a - *(char *)b;
}

int cmp2191Desc(const void *a, const void *b) {
    return *(char *)b - *(char *)a;
}

long long sortDigits(long long num) {
    int negative = num < 0;
    if (negative) num = -num;
    char s[20];
    sprintf(s, "%lld", num);
    int len = strlen(s);
    if (negative) {
        qsort(s, len, sizeof(char), cmp2191Desc);
    } else {
        qsort(s, len, sizeof(char), cmp2191Asc);
    }
    long long result = 0;
    for (int i = 0; i < len; i++) {
        result = result * 10 + (s[i] - '0');
    }
    return negative ? -result : result;
}
