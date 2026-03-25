#include <string.h>
#include <stdbool.h>

static bool isPalin(const char* s, int l, int r) {
    while (l < r) { if (s[l++] != s[r--]) return false; }
    return true;
}

static bool check(const char* s1, const char* s2, int n) {
    int i = 0, j = n - 1;
    while (i < j && s1[i] == s2[j]) { i++; j--; }
    if (i >= j) return true;
    return isPalin(s1, i, j) || isPalin(s2, i, j);
}

bool checkPalindromeFormation(char* a, char* b) {
    int n = strlen(a);
    return check(a, b, n) || check(b, a, n);
}
