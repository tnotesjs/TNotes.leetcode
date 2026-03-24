long long gcd_val(long long a, long long b) {
    while (b) { long long t = b; b = a % b; a = t; }
    return a;
}

char* fractionAddition(char* expression) {
    long long num = 0, den = 1;
    int i = 0, n = strlen(expression);
    while (i < n) {
        int sign = 1;
        if (expression[i] == '+' || expression[i] == '-') {
            if (expression[i] == '-') sign = -1;
            i++;
        }
        long long a = 0;
        while (i < n && expression[i] != '/') {
            a = a * 10 + (expression[i] - '0');
            i++;
        }
        i++;
        long long b = 0;
        while (i < n && expression[i] != '+' && expression[i] != '-') {
            b = b * 10 + (expression[i] - '0');
            i++;
        }
        a *= sign;
        num = num * b + a * den;
        den *= b;
        long long g = gcd_val(num < 0 ? -num : num, den);
        num /= g;
        den /= g;
    }
    char* res = (char*)malloc(64);
    sprintf(res, "%lld/%lld", num, den);
    return res;
}
