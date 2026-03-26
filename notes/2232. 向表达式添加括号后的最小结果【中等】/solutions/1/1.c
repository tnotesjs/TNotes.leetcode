char* minimizeResult(char* expression) {
    int plusIdx = 0;
    while (expression[plusIdx] != '+') plusIdx++;
    char left[10], right[10];
    strncpy(left, expression, plusIdx);
    left[plusIdx] = '\0';
    strcpy(right, expression + plusIdx + 1);
    int leftLen = strlen(left), rightLen = strlen(right);
    long long minVal = __LONG_LONG_MAX__;
    int bestL = 0, bestR = rightLen;
    char buf[10];
    for (int i = 0; i < leftLen; i++) {
        for (int j = 1; j <= rightLen; j++) {
            long long mulL = 1, mulR = 1;
            if (i > 0) {
                strncpy(buf, left, i); buf[i] = '\0';
                mulL = atoll(buf);
            }
            long long addL = atoll(left + i);
            strncpy(buf, right, j); buf[j] = '\0';
            long long addR = atoll(buf);
            if (j < rightLen) mulR = atoll(right + j);
            long long val = mulL * (addL + addR) * mulR;
            if (val < minVal) {
                minVal = val;
                bestL = i; bestR = j;
            }
        }
    }
    char *res = (char *)malloc(strlen(expression) + 3);
    int pos = 0;
    for (int i = 0; i < bestL; i++) res[pos++] = left[i];
    res[pos++] = '(';
    for (int i = bestL; i < leftLen; i++) res[pos++] = left[i];
    res[pos++] = '+';
    for (int i = 0; i < bestR; i++) res[pos++] = right[i];
    res[pos++] = ')';
    for (int i = bestR; i < rightLen; i++) res[pos++] = right[i];
    res[pos] = '\0';
    return res;
}
