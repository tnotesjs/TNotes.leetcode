char* shiftingLetters(char* s, int* shifts, int shiftsSize) {
    int n = strlen(s);
    char* res = (char*)malloc(n + 1);
    strcpy(res, s);
    long long total = 0;
    for (int i = n - 1; i >= 0; i--) {
        total = (total + shifts[i]) % 26;
        res[i] = (s[i] - 'a' + total) % 26 + 'a';
    }
    res[n] = '\0';
    return res;
}
