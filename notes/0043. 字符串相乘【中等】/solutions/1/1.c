char* multiply(char* num1, char* num2) {
    int m = strlen(num1), n = strlen(num2);
    int len = m + n;
    int* pos = (int*)calloc(len, sizeof(int));

    for (int i = m - 1; i >= 0; i--) {
        for (int j = n - 1; j >= 0; j--) {
            int mul = (num1[i] - '0') * (num2[j] - '0');
            int p1 = i + j, p2 = i + j + 1;
            int sum = mul + pos[p2];
            pos[p2] = sum % 10;
            pos[p1] += sum / 10;
        }
    }

    char* res = (char*)malloc((len + 1) * sizeof(char));
    int start = 0;
    while (start < len - 1 && pos[start] == 0) start++;  // 跳过前导零
    int idx = 0;
    for (int i = start; i < len; i++) {
        res[idx++] = '0' + pos[i];
    }
    res[idx] = '\0';
    free(pos);
    return res;
}
