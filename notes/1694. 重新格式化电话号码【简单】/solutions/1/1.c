char* reformatNumber(char* number) {
    // 清洗：去除空格和短横线
    char digits[110];
    int d = 0;
    for (int i = 0; number[i]; i++) {
        if (number[i] != ' ' && number[i] != '-') {
            digits[d++] = number[i];
        }
    }
    digits[d] = '\0';

    // 分块后拼接，最多 d 个数字 + d/3 个短横线
    char* res = (char*)malloc(d + d / 3 + 2);
    int i = 0, j = 0;
    while (d - i > 4) {
        if (j > 0) res[j++] = '-';
        res[j++] = digits[i++];
        res[j++] = digits[i++];
        res[j++] = digits[i++];
    }
    int remain = d - i;
    if (remain == 4) {
        if (j > 0) res[j++] = '-';
        res[j++] = digits[i++];
        res[j++] = digits[i++];
        res[j++] = '-';
        res[j++] = digits[i++];
        res[j++] = digits[i++];
    } else {
        if (j > 0) res[j++] = '-';
        while (i < d) res[j++] = digits[i++];
    }
    res[j] = '\0';
    return res;
}
