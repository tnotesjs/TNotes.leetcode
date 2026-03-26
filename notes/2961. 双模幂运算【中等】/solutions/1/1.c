long long modPow(long long base, long long exp, long long mod) {
    long long result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = result * base % mod;
        base = base * base % mod;
        exp >>= 1;
    }
    return result;
}

int* getGoodIndices(int** variables, int variablesSize, int* variablesColSize, int target, int* returnSize) {
    int* res = malloc(variablesSize * sizeof(int));
    *returnSize = 0;
    for (int i = 0; i < variablesSize; i++) {
        int a = variables[i][0], b = variables[i][1];
        int c = variables[i][2], m = variables[i][3];
        long long x = modPow(a, b, 10);
        if (modPow(x, c, m) == target)
            res[(*returnSize)++] = i;
    }
    return res;
}
