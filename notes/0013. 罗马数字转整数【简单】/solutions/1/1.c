int romanToInt(char* s) {
    // 映射表：包含 7 个单字符 + 6 个特殊双字符
    char* keys[] = {"IV","IX","XL","XC","CD","CM","I","V","X","L","C","D","M"};
    int  vals[]  = {  4,   9,  40,  90, 400, 900,  1,  5, 10, 50,100, 500,1000};
    int n = 13;

    int result = 0;
    int i = 0;
    int len = strlen(s);
    while (i < len) {
        int matched = 0;
        // 先尝试匹配双字符特殊情况
        if (i + 1 < len) {
            char two[3] = {s[i], s[i+1], '\0'};
            for (int k = 0; k < 6; k++) {
                if (strcmp(two, keys[k]) == 0) {
                    result += vals[k];
                    i += 2;
                    matched = 1;
                    break;
                }
            }
        }
        if (!matched) {
            // 匹配单字符正常情况
            char one[2] = {s[i], '\0'};
            for (int k = 6; k < n; k++) {
                if (strcmp(one, keys[k]) == 0) {
                    result += vals[k];
                    break;
                }
            }
            i++;
        }
    }
    return result;
}
