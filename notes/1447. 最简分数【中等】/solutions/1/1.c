int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }

char** simplifiedFractions(int n, int* returnSize) {
    char** res = (char**)malloc(10000 * sizeof(char*));
    int cnt = 0;
    for (int d = 2; d <= n; d++) {
        for (int num = 1; num < d; num++) {
            if (gcd(num, d) == 1) {
                res[cnt] = (char*)malloc(10);
                sprintf(res[cnt], "%d/%d", num, d);
                cnt++;
            }
        }
    }
    *returnSize = cnt;
    return res;
}
