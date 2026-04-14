int myAtoi(char* s) {
    int i = 0;

    // 1. 跳过前导空格
    while (s[i] == ' ')
        i++;

    // 2. 判断符号
    int sign = 1;
    if (s[i] == '+' || s[i] == '-') {
        if (s[i] == '-')
            sign = -1;
        i++;
    }

    // 3. 读取数字，提前检查溢出
    int ans = 0;
    while (s[i] >= '0' && s[i] <= '9') {
        int digit = s[i] - '0';
        if (ans > (2147483647 - digit) / 10) {
            return sign == 1 ? 2147483647 : -2147483648;
        }
        ans = ans * 10 + digit;
        i++;
    }

    return sign * ans;
}
