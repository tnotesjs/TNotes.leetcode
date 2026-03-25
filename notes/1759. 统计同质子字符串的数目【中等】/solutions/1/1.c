#include <string.h>

int countHomogenous(char* s) {
    long long MOD = 1000000007;
    long long res = 0, cnt = 1;
    int n = strlen(s);
    for (int i = 1; i <= n; i++) {
        if (i < n && s[i] == s[i-1]) cnt++;
        else { res = (res + cnt * (cnt + 1) / 2) % MOD; cnt = 1; }
    }
    return (int)res;
}
