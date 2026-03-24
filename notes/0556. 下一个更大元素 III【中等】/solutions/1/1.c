int nextGreaterElement(int n) {
    char digits[12];
    sprintf(digits, "%d", n);
    int len = strlen(digits);
    int i = len - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) i--;
    if (i < 0) return -1;
    int j = len - 1;
    while (digits[j] <= digits[i]) j--;
    char tmp = digits[i]; digits[i] = digits[j]; digits[j] = tmp;
    int l = i + 1, r = len - 1;
    while (l < r) {
        tmp = digits[l]; digits[l] = digits[r]; digits[r] = tmp;
        l++; r--;
    }
    long long res = atoll(digits);
    return res > 2147483647 ? -1 : (int)res;
}
