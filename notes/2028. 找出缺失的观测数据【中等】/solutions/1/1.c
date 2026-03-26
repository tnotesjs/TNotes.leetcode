int* missingRolls(int* rolls, int rollsSize, int mean, int n, int* returnSize) {
    int total = mean * (n + rollsSize);
    int observed = 0;
    for (int i = 0; i < rollsSize; i++) observed += rolls[i];
    int remaining = total - observed;
    if (remaining < n || remaining > 6 * n) { *returnSize = 0; return NULL; }
    int* result = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) result[i] = 1;
    remaining -= n;
    for (int i = 0; i < n && remaining > 0; i++) {
        int add = remaining < 5 ? remaining : 5;
        result[i] += add;
        remaining -= add;
    }
    *returnSize = n;
    return result;
}
