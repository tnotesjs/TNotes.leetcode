int* sequentialDigits(int low, int high, int* returnSize) {
    int* res = malloc(sizeof(int) * 100);
    *returnSize = 0;
    for (int start = 1; start <= 9; start++) {
        int num = start;
        for (int next = start + 1; next <= 9; next++) {
            num = num * 10 + next;
            if (num >= low && num <= high) {
                res[(*returnSize)++] = num;
            }
            if (num > high) break;
        }
    }
    // 简单排序
    for (int i = 0; i < *returnSize; i++) {
        for (int j = i + 1; j < *returnSize; j++) {
            if (res[i] > res[j]) {
                int tmp = res[i]; res[i] = res[j]; res[j] = tmp;
            }
        }
    }
    return res;
}
