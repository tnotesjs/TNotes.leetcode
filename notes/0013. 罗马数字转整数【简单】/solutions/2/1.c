int charToVal(char c) {
    switch (c) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

int romanToInt(char* s) {
    int ans = 0;
    int len = strlen(s);
    for (int i = 0; i < len; i++) {
        int cur = charToVal(s[i]);
        int next = (i + 1 < len) ? charToVal(s[i + 1]) : 0;
        if (cur < next) {
            ans += next - cur; // 特殊情况：取反并与下一个符号合并
            i++;
        } else {
            ans += cur; // 正常情况：直接累加
        }
    }
    return ans;
}
