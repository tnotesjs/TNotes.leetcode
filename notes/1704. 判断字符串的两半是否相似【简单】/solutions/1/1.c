bool halvesAreAlike(char* s) {
    const char* vowels = "aeiouAEIOU";
    int cnt = 0;
    int n = strlen(s);
    int mid = n / 2;
    for (int i = 0; i < mid; i++) {
        if (strchr(vowels, s[i])) cnt++;
    }
    for (int i = mid; i < n; i++) {
        if (strchr(vowels, s[i])) cnt--;
    }
    return cnt == 0;
}

// 2026.02.22
// 执行用时分布 0ms 击败 100.00%
// 消耗内存分布 7.81MB 击败 100.00%
