#define MOD 1000000007

int digits_arr[24];
int n_digits;
int memo[24][401][2];
int min_s, max_s;

int dp(int pos, int sum, int tight) {
    if (sum > max_s) return 0;
    if (pos == n_digits) return sum >= min_s ? 1 : 0;
    if (memo[pos][sum][tight] != -1) return memo[pos][sum][tight];
    int limit = tight ? digits_arr[pos] : 9;
    long long res = 0;
    for (int d = 0; d <= limit; d++) {
        res = (res + dp(pos + 1, sum + d, tight && d == limit)) % MOD;
    }
    return memo[pos][sum][tight] = (int)res;
}

int calc(char* num) {
    n_digits = strlen(num);
    for (int i = 0; i < n_digits; i++) digits_arr[i] = num[i] - '0';
    memset(memo, -1, sizeof(memo));
    return dp(0, 0, 1);
}

void subtract1(char* s, char* out) {
    int len = strlen(s);
    strcpy(out, s);
    int i = len - 1;
    while (i >= 0 && out[i] == '0') { out[i] = '9'; i--; }
    if (i >= 0) out[i]--;
    int start = 0;
    while (start < len - 1 && out[start] == '0') start++;
    if (start > 0) memmove(out, out + start, len - start + 1);
}

int count(char* num1, char* num2, int min_sum, int max_sum) {
    min_s = min_sum;
    max_s = max_sum;
    int a = calc(num2);
    char buf[24];
    subtract1(num1, buf);
    int b = calc(buf);
    return (a - b + MOD) % MOD;
}
