char* breakPalindrome(char* palindrome) {
    int n = strlen(palindrome);
    if (n == 1) return "";
    char* res = malloc(n + 1);
    strcpy(res, palindrome);
    for (int i = 0; i < n / 2; i++) {
        if (res[i] != 'a') {
            res[i] = 'a';
            return res;
        }
    }
    res[n - 1] = 'b';
    return res;
}
