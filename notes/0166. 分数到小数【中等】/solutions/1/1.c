char* fractionToDecimal(int numerator, int denominator) {
    char* res = (char*)calloc(10001, sizeof(char));
    int pos = 0;
    if (numerator == 0) { res[0] = '0'; return res; }
    // 处理符号
    if ((numerator < 0) ^ (denominator < 0)) res[pos++] = '-';
    long long num = llabs((long long)numerator);
    long long den = llabs((long long)denominator);
    // 整数部分
    pos += sprintf(res + pos, "%lld", num / den);
    long long remainder = num % den;
    if (remainder == 0) return res;
    res[pos++] = '.';
    // 用数组记录余数对应的位置
    long long* rems = (long long*)calloc(10001, sizeof(long long));
    int* remPos = (int*)calloc(10001, sizeof(int));
    int remCount = 0;
    while (remainder != 0) {
        // 检查余数是否出现过
        for (int i = 0; i < remCount; i++) {
            if (rems[i] == remainder) {
                // 插入括号
                int insertPos = remPos[i];
                memmove(res + insertPos + 1, res + insertPos, pos - insertPos);
                res[insertPos] = '(';
                pos++;
                res[pos++] = ')';
                res[pos] = '\0';
                free(rems); free(remPos);
                return res;
            }
        }
        rems[remCount] = remainder;
        remPos[remCount] = pos;
        remCount++;
        remainder *= 10;
        res[pos++] = '0' + (int)(remainder / den);
        remainder %= den;
    }
    res[pos] = '\0';
    free(rems); free(remPos);
    return res;
}
