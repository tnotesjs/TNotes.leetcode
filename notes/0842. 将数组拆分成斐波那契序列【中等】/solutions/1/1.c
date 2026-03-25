int result[200];
int resultLen;

bool bt(char* num, int idx, int n) {
    if (idx == n) return resultLen >= 3;
    long long val = 0;
    for (int i = idx; i < n; i++) {
        val = val * 10 + (num[i] - '0');
        if (val > 2147483647) break;
        if (num[idx] == '0' && i > idx) break;
        if (resultLen >= 2) {
            long long sum = (long long)result[resultLen-1] + result[resultLen-2];
            if (val < sum) continue;
            if (val > sum) break;
        }
        result[resultLen++] = (int)val;
        if (bt(num, i + 1, n)) return true;
        resultLen--;
    }
    return false;
}

int* splitIntoFibonacci(char* num, int* returnSize) {
    resultLen = 0;
    if (bt(num, 0, strlen(num))) {
        *returnSize = resultLen;
        int* res = (int*)malloc(sizeof(int) * resultLen);
        memcpy(res, result, sizeof(int) * resultLen);
        return res;
    }
    *returnSize = 0;
    return NULL;
}
