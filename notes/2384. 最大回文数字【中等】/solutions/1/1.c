char* largestPalindromic(char* num) {
    int count[10] = {0};
    for (int i = 0; num[i]; i++) count[num[i] - '0']++;
    int n = strlen(num);
    char* left = (char*)malloc(n + 1);
    int leftLen = 0;
    for (int d = 9; d >= 0; d--) {
        int pairs = count[d] / 2;
        for (int i = 0; i < pairs; i++) left[leftLen++] = '0' + d;
        count[d] -= pairs * 2;
    }
    left[leftLen] = '\0';
    if (leftLen == 0 || left[0] == '0') {
        char* res = (char*)malloc(2);
        res[0] = '0';
        for (int d = 9; d >= 0; d--) {
            if (count[d] > 0) { res[0] = '0' + d; break; }
        }
        res[1] = '\0';
        free(left);
        return res;
    }
    int mid = -1;
    for (int d = 9; d >= 0; d--) {
        if (count[d] > 0) { mid = d; break; }
    }
    int resLen = leftLen * 2 + (mid >= 0 ? 1 : 0);
    char* result = (char*)malloc(resLen + 1);
    memcpy(result, left, leftLen);
    int idx = leftLen;
    if (mid >= 0) result[idx++] = '0' + mid;
    for (int i = leftLen - 1; i >= 0; i--) result[idx++] = left[i];
    result[idx] = '\0';
    free(left);
    return result;
}
