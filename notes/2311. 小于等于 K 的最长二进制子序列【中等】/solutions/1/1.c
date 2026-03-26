int longestSubsequence(char* s, int k) {
    int n = strlen(s);
    int res = 0;
    long long val = 0, power = 1;
    for (int i = n - 1; i >= 0; i--) {
        if (s[i] == '0') {
            res++;
        } else {
            if (power <= k && val + power <= k) {
                val += power;
                res++;
            }
        }
        if (power <= k) power *= 2;
    }
    return res;
}
