void parse(char* s, int* coef, int* val) {
    *coef = 0; *val = 0;
    int num = 0, sign = 1, hasNum = 0;
    for (int i = 0; s[i] || hasNum; i++) {
        char c = s[i];
        if (c == 0 || c == '+' || c == '-') {
            if (hasNum) *val += sign * num;
            num = 0; hasNum = 0;
            sign = (c == '-') ? -1 : 1;
            if (c == 0) break;
        } else if (c == 'x') {
            *coef += hasNum ? sign * num : sign;
            num = 0; hasNum = 0;
        } else {
            num = num * 10 + (c - '0');
            hasNum = 1;
        }
    }
}

char* solveEquation(char* equation) {
    char* eq = strchr(equation, '=');
    int pos = eq - equation;
    char left[256], right[256];
    strncpy(left, equation, pos); left[pos] = 0;
    strcpy(right, eq + 1);
    int lc, lv, rc, rv;
    parse(left, &lc, &lv);
    parse(right, &rc, &rv);
    int coef = lc - rc, val = rv - lv;
    char* res = (char*)malloc(64);
    if (coef == 0) {
        strcpy(res, val == 0 ? "Infinite solutions" : "No solution");
    } else {
        sprintf(res, "x=%d", val / coef);
    }
    return res;
}
