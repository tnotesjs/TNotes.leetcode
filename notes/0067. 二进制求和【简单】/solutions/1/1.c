char* addBinary(char* a, char* b) {
    int lenA = strlen(a);
    int lenB = strlen(b);
    int maxLen = lenA > lenB ? lenA : lenB;

    char* result =
        (char*)malloc(sizeof(char) * (maxLen + 2)); // +1 进位 +1 '\0'
    result[maxLen + 1] = '\0';

    int carry = 0;
    int pos = maxLen; // 从结果末尾开始填充

    int i = lenA - 1;
    int j = lenB - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        int digitA = i >= 0 ? a[i] - '0' : 0;
        int digitB = j >= 0 ? b[j] - '0' : 0;
        int sum = digitA + digitB + carry;

        result[pos] = (sum % 2) + '0';
        carry = sum / 2;

        i--;
        j--;
        pos--;
    }

    // 如果 pos == 0，说明没有多余进位，跳过前导空位
    if (pos == 0) {
        // 整体左移一位
        for (int k = 0; k <= maxLen; k++) {
            result[k] = result[k + 1];
        }
    }

    return result;
}
